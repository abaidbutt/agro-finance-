import React from 'react';
import { Block, Text } from '../../components';

const ExtraCount = ({ count, extraArea, packaging }) => {
  return (
    <Block style={{ marginTop: 16 }}>
      <Text gray>
        Number {packaging}: {count}
      </Text>
      <Text gray>It remains for you to: {extraArea} area</Text>
    </Block>
  );
};

export default ExtraCount;
