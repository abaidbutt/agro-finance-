import React from "react";
import { Switch, StyleSheet } from "react-native";
import useAnimatedExpand from "../../hooks/useAnimatedExpand";
import { Block, Text } from "../../components";
import Chart from "./PieChart";
import { theme } from "../../theme";

const { colors, sizes } = theme;

const StatisticsCard = ({ label, data }) => {
  const {
    oilConsumption,
    oilPrice,
    paid,
    seed,
    fertilizer,
    sprayer,
    rented,
    total,
  } = data;
  const { expanded, changeLayout } = useAnimatedExpand();

  return (
    <Block card color={colors.white} style={styles.container}>
      <Text gray title bold center style={styles.title}>
        {label}
      </Text>
      <Block row space="between" style={styles.columns}>
        <Block flex={false}>
          <Text gray>Liter of oil: {Math.round(oilConsumption)}</Text>
          <Text gray>Helpful: {paid}</Text>
          <Text gray>Feeding: {fertilizer}</Text>
          {rented > 0 && <Text gray>Lease: {rented}</Text>}
        </Block>
        <Block flex={false}>
          <Text gray>Oil: {Math.round(oilPrice)} </Text>
          <Text gray>Seeds: {seed}</Text>
          <Text gray>Protection: {sprayer}</Text>
        </Block>
      </Block>
      {expanded && (
        <Chart
          expanded={expanded}
          seed={seed}
          paid={paid}
          sprayer={sprayer}
          oil={oilPrice}
          fertilizer={fertilizer}
          rented={rented}
        />
      )}
      <Block row space="around" style={styles.total}>
        <Block row style={styles.chartSwitch}>
          <Switch value={expanded} onValueChange={changeLayout} />
          <Text gray>Graph </Text>
        </Block>
        <Block row style={styles.chartSwitch}>
          <Text gray h3 right>
            In Total: {Math.round(total)}
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: sizes.base,
    marginTop: sizes.base,
    paddingHorizontal: sizes.base * 2,
  },
  title: {
    borderBottomColor: colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: sizes.base,
  },
  columns: {
    marginVertical: sizes.base,
  },
  total: {
    borderTopColor: colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: sizes.base,
  },
  chartSwitch: {
    alignItems: "center",
  },
});

export default StatisticsCard;
