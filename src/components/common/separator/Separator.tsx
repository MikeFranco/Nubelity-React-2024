import React from 'react';
import { ISeparatorProps } from './types';

const Separator = ({
  height = '10',
  width = '10',
  color = '#986F49',
}: ISeparatorProps) => {
  return (
    <div
      style={{
        height,
        width,
        backgroundColor: color,
      }}
    ></div>
  );
};

export default Separator;
