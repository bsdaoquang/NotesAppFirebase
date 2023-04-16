import {View, Text} from 'react-native';
import React from 'react';

interface Props {
  width?: number;
  height?: number;
}

const SpaceComponent = ({width, height}: Props) => {
  return (
    <View
      style={[
        {
          width,
          height,
        },
      ]}
    />
  );
};

export default SpaceComponent;
