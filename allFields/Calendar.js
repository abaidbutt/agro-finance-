import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { RadioButtons, Block, Checkbox } from '../components';
import CalendarItem from './CalendarItem';
import useCalendarWorks from '../hooks/useCalendarWorks';
import { theme } from '../theme';

const { sizes, colors } = theme;

const isDoneFilterItems = [
  { value: 'planing', text: 'Planned' },
  { value: 'done', text: 'Done' },
  { value: 'all', text: 'All' }
];

const sortingValues = [
  { value: 'time', text: 'date' },
  { value: 'fields', text: 'fields' }
];

const CalendarScreen = () => {
  const numberOfFields = useSelector(state => state.fields.length);
  const [currentTab, setCurrentTab] = useState('planing');
  const [sortingItem, setSortingItem] = useState('fields');
  const [isDate, setIsDate] = useState(false);

  const works = [...Array(numberOfFields).keys()]
    .map(field => useCalendarWorks(field, currentTab, isDate))
    .flat()
    .sort((a, b) => {
      if (sortingItem === 'time') {
        return new Date(a.date) - new Date(b.date);
      }
      return null;
    });

  return (
    <Block style={styles.container} flex={false}>
      <Checkbox
        value={isDate}
        setValue={setIsDate}
        label="Show only works with date"
      />
      <RadioButtons
        title="Show"
        values={isDoneFilterItems}
        current={currentTab}
        setCurrent={setCurrentTab}
      />
      <RadioButtons
        title="Sort by:"
        values={sortingValues}
        current={sortingItem}
        setCurrent={setSortingItem}
      />
      {works.map((work, i) => {
        // eslint-disable-next-line react/no-array-index-key
        return <CalendarItem work={work} i={i} key={i} />;
      })}
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: sizes.base,
    backgroundColor: colors.backgorund
  }
});

export default CalendarScreen;
