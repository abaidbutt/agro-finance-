import React from 'react';
import { useSelector } from 'react-redux';
import WorkCard from './WorkCard';
import { worksPerPlant } from '../../assets/plants';

const WorksConnected = ({ field }) => {
  const { plant } = useSelector(state => state.fields[field]);

  const {
    plowing,
    disking,
    horrowing,
    harvesting,
    sowing,
    fertilization1,
    fertilization2,
    fertilization3,
    spraying1,
    spraying2,
    spraying3,
    spraying4,
    midRowCultivation1,
    midRowCultivation2
  } = useSelector(state => ({
    plowing: state.fields[field].groundWorksState.plowing,
    disking: state.fields[field].groundWorksState.disking,
    horrowing: state.fields[field].groundWorksState.horrowing,
    harvesting: state.fields[field].groundWorksState.harvesting,
    sowing: {
      ...state.fields[field].groundWorksState.sowing,
      special: { ...state.fields[field].sowingState }
    },
    fertilization1: {
      ...state.fields[field].groundWorksState.fertilization1,
      special: { ...state.fields[field].fertilizationState.first }
    },
    fertilization2: {
      ...state.fields[field].groundWorksState.fertilization2,
      special: { ...state.fields[field].fertilizationState.second }
    },
    fertilization3: {
      ...state.fields[field].groundWorksState.fertilization3,
      special: { ...state.fields[field].fertilizationState.third }
    },
    spraying1: {
      ...state.fields[field].groundWorksState.spraying1,
      special: { ...state.fields[field].sprayingState.first }
    },
    spraying2: {
      ...state.fields[field].groundWorksState.spraying2,
      special: { ...state.fields[field].sprayingState.second }
    },
    spraying3: {
      ...state.fields[field].groundWorksState.spraying3,
      special: { ...state.fields[field].sprayingState.third }
    },
    spraying4: {
      ...state.fields[field].groundWorksState.spraying4,
      special: { ...state.fields[field].sprayingState.fourth }
    },
    midRowCultivation1: {
      ...state.fields[field].groundWorksState.midRowCultivation1,
      special: { ...state.fields[field].midRowCultivationState.first }
    },
    midRowCultivation2: {
      ...state.fields[field].groundWorksState.midRowCultivation2,
      special: { ...state.fields[field].midRowCultivationState.second }
    }
  }));

  const works = {
    plowing: { name: 'Tillage', work: plowing },
    disking: { name: 'Plate', work: disking },
    horrowing: {
      name: 'Sowing',
      work: horrowing
    },
    harvesting: { name: 'Harvest', work: harvesting },
    sowing: { name: 'Sowing', work: sowing },
    spraying1: {
      name: 'First Protection',
      work: spraying1
    },
    spraying2: {
      name: 'Second Protection',
      work: spraying2
    },
    spraying3: {
      name: 'Third Protection',
      work: spraying3
    },
    spraying4: {
      name: 'Fourth Protection',
      work: spraying4
    },
    fertilization1: {
      name: 'First Savings',
      work: fertilization1
    },
    fertilization2: {
      name: 'Second Savings',
      work: fertilization2
    },
    fertilization3: {
      name: 'Third Feeding',
      work: fertilization3
    },
    midRowCultivation1: {
      name: 'First Interrow',
      work: midRowCultivation1
    },
    midRowCultivation2: {
      name: 'Second Interrow',
      work: midRowCultivation2
    }
  };

  return (
    <>
      {worksPerPlant[plant].map(work => (
        <WorkCard
          key={works[work].work.workName}
          field={field}
          plant={plant}
          work={works[work].work}
          name={works[work].name}
        />
      ))}
    </>
  );
};

export default WorksConnected;
