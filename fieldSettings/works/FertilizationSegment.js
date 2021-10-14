import React from 'react';
import { useSelector } from 'react-redux';
import { Block, ProductInfoButton, Picker, InputWithIncrementer } from '../../components';
import ExtraCount from './ExtraCount';
import {
  changeSprayerOrFertilizer,
  changeFertilizerConsumption,
  changeFertilizerConsumptionIncrementing
} from '../../redux/actions/specialActions';
import { calcFertilizationSegment } from '../../utils/calcFunctions';
import { fertilization, midRowCultivation } from '../../assets/works';

const FertilizationSegment = ({
  fertilizationData,
  actionArgumentObject,
  place,
  midRow,
  field,
  plant
}) => {
  const area = useSelector(state => state.fields[field].area);
  const { turn } = actionArgumentObject;
  const fertilizerSelected = fertilizationData[`fertilizer${place}`];
  const { fertilizers } = place
    ? fertilization[plant][turn]
    : midRowCultivation[plant][turn];
  const { bags, extraArea } = calcFertilizationSegment(
    area,
    fertilizerSelected,
    fertilizationData[`fertilizerConsumption${place}`]
  );

  const fertilizerNames = fertilizers.map(fertilizer => fertilizer[0]);

  return (
    <Block>
      <Picker
        items={fertilizerNames}
        label="Select Fertilizer"
        active={fertilizerSelected}
        action={changeSprayerOrFertilizer}
        actionArgumentObject={{
          ...actionArgumentObject,
          workState: midRow ? "midRowCultivationState" : "fertilizationState",
          propertyName: `fertilizer${place}`,
        }}
      />
      {fertilizerSelected !== "" && (
        <ProductInfoButton
          product={fertilizerSelected}
          group="fertilizer"
          label="More in Products"
        />
      )}
      <InputWithIncrementer
        label="Kg per"
        action={changeFertilizerConsumption}
        actionIncrementing={changeFertilizerConsumptionIncrementing}
        actionArgumentObject={{
          ...actionArgumentObject,
          workState: midRow ? "midRowCultivationState" : "fertilizationState",
          propertyName: `fertilizerConsumption${place}`,
          value: String(fertilizationData[`fertilizerConsumption${place}`]),
        }}
      />
      <ExtraCount count={bags} extraArea={extraArea} packaging="vreća" />
    </Block>
  );
};

export default FertilizationSegment;
