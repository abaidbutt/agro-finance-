import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text } from '../../components';
import { theme } from '../../theme';

const SubTotalPresentational = ({
  label,
  paid,
  paidPrice,
  oilConsumption,
  oilConsumptionPrice,
  specialPrice,
  total,
}) => {
  return (
    <Block style={styles.container}>
      {paid ? (
        <Text gray light style={styles.item}>
          For Helpful: {paidPrice} pkr.
        </Text>
      ) : (
        <>
          <Text gray light style={styles.item}>
          Liter of oil: {oilConsumption}.
          </Text>
          <Text gray light style={styles.item}>
           For Oil: {oilConsumptionPrice} pkr.
          </Text>
        </>
      )}

      {label && (
        <Text gray light style={styles.item}>
          For {label}: {specialPrice} d.
        </Text>
      )}

      <Text gray title style={styles.total}>
        In total: {total} pkr.
      </Text>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: theme.sizes.base,
    alignItems: 'flex-end',
  },
  total: {
    borderTopColor: theme.colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

export default SubTotalPresentational;
