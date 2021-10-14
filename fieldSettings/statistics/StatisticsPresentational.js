import React from 'react';
import { Block } from '../../components';
import StatisticsCard from './StatisticsCard';
import Profit from './Profit';

const StatisticsPresentational = ({ done, planing, total }) => {
  return (
    <Block>
      <StatisticsCard label="Done" data={done} />
      <StatisticsCard label="Schedule" data={planing} />
      <StatisticsCard label="total" data={total} />
      <Profit invested={total.total} />
    </Block>
  );
};

export default StatisticsPresentational;
