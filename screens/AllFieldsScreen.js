/* eslint-disable global-require */
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { Tabs, Block } from '../components';
import FieldsConnected from '../allFields/FieldsConnected';
import Statistics from '../allFields/StatisticsConnected';
import { theme } from '../theme';
import Calendar from '../allFields/Calendar';

const tabs = [
  { label: 'Fields', image: require('../assets/icons/farm.png') },
  {
    label: 'Statistics',
    image: require('../assets/icons/graphic.png')
  },
  {
    label: 'Calender',
    image: require('../assets/icons/calendar.svg.png')
  }
];

const AllFieldsScreen = ({ navigation }) => {
  const [active, changeActive] = useState('Fields');

  return (
    <Block color={theme.colors.backgorund}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {active === 'Fields' && <FieldsConnected navigation={navigation} />}
        {active === 'Statistics' && <Statistics />}
        {active === 'Calender' && <Calendar />}
      </ScrollView>
      <Tabs tabs={tabs} active={active} changeActive={changeActive} />
    </Block>
  );
};

export default AllFieldsScreen;
