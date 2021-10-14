import React from 'react';
import { StyleSheet } from 'react-native';
import { Switch, Block, Input } from '../../components';
import {
  changePaid,
  changePaidPrice,
  changeOilConsumption,
} from '../../redux/actions/cammonWorkActions';
import { theme } from '../../theme';

const PaidAndConsumptionSegment = ({ actionArgumentObject, paid, paidPrice, oilConsumption }) => {
  return (
    <Block style={styles.container}>
      <Switch
        label="Pay helpfully"
        action={changePaid}
        actionArgumentObject={{ ...actionArgumentObject, value: paid }}
      />
      {paid ? (
        <Input
          label="Price of service per hectare"
          unit="din"
          value={String(paidPrice)}
          action={changePaidPrice}
          actionArgumentObject={actionArgumentObject}
        />
      ) : (
        <Input
          label="Oil consumption per hectare"
          unit="litara"
          value={String(oilConsumption)}
          action={changeOilConsumption}
          actionArgumentObject={actionArgumentObject}
        />
      )}
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.sizes.base,
  },
});

export default PaidAndConsumptionSegment;
