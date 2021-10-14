import React from 'react';
import { useSelector } from 'react-redux';
import { Input } from '../../components';
import { changeArea } from '../../redux/actions/basicStateActions';
import { theme } from '../../theme';

const Area = ({ field }) => {
  const area = useSelector(state => state.fields[field].area);
  return (
    <Input
      unit="square meter"
      label="Field area:  "
      value={String(area)}
      action={changeArea}
      actionArgumentObject={{ field }}
      customStyle={{ marginVertical: theme.sizes.base }}
    />
  );
};

export default Area;
