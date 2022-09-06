import React from 'react'
import { OptionProps, OptionType } from '../../../types';
import ManyOptions from '../widgets/ManyOptions';

const Date = () => {

  const dishes: OptionType[] = [
    {
      id: 1,
      name: "Sábado 10 Sept.",
      link: "/#Finish"
    },
    {
      id: 2,
      name: "Domingo 11 Sept.",
      link: "/#Finish"
    },
    {
      id: 3,
      name: "Sábado 17 Sept.",
      link: "/#Finish"
    },
    {
      id: 4,
      name: "Domingo 18 Sept.",
      link: "/#Finish"
    },
  ]

  return (
    <ManyOptions
      title="Qué día quieres que vayamos a cenar?"
      type="Date"
      options={dishes}
      inputName="day"
    />
  )
}

export default Date;