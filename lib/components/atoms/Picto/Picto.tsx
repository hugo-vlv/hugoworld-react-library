import React from 'react';

import Beer from '@assets/icons/beer.svg';

import styles from './Picto.module.css';

export type PictoProps = {
  name: string;
  height: number;
  width: number;
  className?: string;
};

const Picto: React.FC<PictoProps> = ({
  name, height, width, className = '',
}) => {
  const pictoMap: Record<string, string> = {
    beer: Beer,
  };

  // Get the image URL based on the picto name
  const imageUrl = pictoMap[name];

  if (!imageUrl) {
    return null;
  }

  return (
    <img
      src={imageUrl}
      height={height}
      width={width}
      alt={name}
      className={`${styles.picto} ${className || undefined}`}
    />
  );
};

export default Picto;
