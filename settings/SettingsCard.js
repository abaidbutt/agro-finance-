import React from "react";
import { StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from "@expo/vector-icons";
import { auth } from "../config/firebase";
import { Block, Text } from "../components";
import { colors, sizes } from "../theme/theme";
import { useDispatch } from "react-redux";
const Card = ({ screen }) => {
  const navigation = useNavigation();
  const dispatch=useDispatch()
  const { screenName, text } = screen;

  const handleClick = () => {
    if (screenName === "login") {
      auth.signOut();
      dispatch({ type: "SIGNOUT" });
    } else navigation.navigate(screenName);
  };

  return (
    <Block flex={false}>
      <TouchableHighlight onPress={handleClick}>
        <Block style={styles.card} space="between" center card row>
          <Text h2>{text}</Text>
          <Ionicons
            name="chevron-forward-outline"
            size={sizes.base * 2}
            color={colors.blue}
          />
        </Block>
      </TouchableHighlight>
    </Block>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: sizes.base * 2,
    marginBottom: sizes.base,
    marginTop: sizes.base,
    paddingVertical: sizes.base * 2,
    backgroundColor: colors.white,
  },
});
