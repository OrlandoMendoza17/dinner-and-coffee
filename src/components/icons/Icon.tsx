import React from 'react'
import { IconProps } from '../../../types';

const Icon = ({size, fill = "#000", viewBox, children}: IconProps) => {
  return (
    <svg fill={fill} width={size} height={size} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  )
}

export default Icon;