import React from 'react'
import { OptionType } from '../../../types';
import ManyOptions from '../widgets/ManyOptions';

const Date = () => {

  const dishes: OptionType[] = [
    {
      id: 1,
      name: "Sábado 10 Sept.",
      value: "2022-09-10",
      inputName: "date",
      link: "/#Letter"
    },
    {
      id: 2,
      name: "Domingo 11 Sept.",
      value: "2022-09-11",
      inputName: "date",
      link: "/#Letter"
    },
    {
      id: 3,
      name: "Sábado 17 Sept.",
      value: "2022-09-17",
      inputName: "date",
      link: "/#Letter"
    },
    {
      id: 4,
      name: "Domingo 18 Sept.",
      value: "2022-09-19",
      inputName: "date",
      link: "/#Letter"
    },
  ]

  return (
    <ManyOptions
      title="Qué día te prefieres ir a cenar?"
      type="Date"
      options={dishes}
    />
  )
}

export default Date;