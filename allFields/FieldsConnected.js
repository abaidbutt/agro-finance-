import React from "react";
import { StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Block, DBButton, WithQuestion } from "../components";
import FieldCard from "./FieldCard";
import {
  loadFieldsDBThunk,
  saveFieldsDBThunk,
} from "../redux/actions/firebaseActions";

import { theme } from "../theme";

const { sizes } = theme;

const FieldsConnected = ({ navigation }) => {
  const { fields } = useSelector((state) => state);
  const { uid } = useSelector((state) => state.auth);
  console.log(uid, "this is uid");
  const dispatch = useDispatch();

  const handleChangeField = (key) => {
    dispatch({ type: "FIELD_CHANGED", field: key });
    navigation.navigate("FieldSettingsScreen");
  };
  const handleAddField = () => {
    dispatch({ type: "ADD_FIELD" });
  };

  return (
    <Block style={styles.container}>
      <Block row wrap>
        {fields.map((field, i) => (
          <FieldCard
            field={[field.plant, field.area, i]}
            handleChangeField={handleChangeField}
            // eslint-disable-next-line react/no-array-index-key
            key={i}
          />
        ))}
        <FieldCard
          handleChangeField={handleAddField}
          field={[null, null, null]}
        />
      </Block>
      <Block row>
        <WithQuestion>
          <DBButton
            uid={uid}
            thunk={saveFieldsDBThunk}
            dispatch={dispatch}
            title="Save"
            primary
          />
        </WithQuestion>
        <WithQuestion>
          <DBButton
            uid={uid}
            thunk={loadFieldsDBThunk}
            dispatch={dispatch}
            title="get your detail"
          />
        </WithQuestion>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: sizes.base,
    marginHorizontal: sizes.base,
  },
});

export default FieldsConnected;
