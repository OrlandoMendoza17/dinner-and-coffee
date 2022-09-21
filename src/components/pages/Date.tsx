import React from 'react'
import { OptionType } from '../../../types';
import ManyOptions from '../widgets/ManyOptions';

const Date = () => {

  const dishes: OptionType[] = [
    {
      id: 1,
      name: "Sábado 24 Sept.",
      value: "09/24/2022",
      inputName: "date",
      link: "/#Letter"
    },
    {
      id: 2,
      name: "Domingo 25 Sept.",
      value: "09/25/2022",
      inputName: "date",
      link: "/#Letter"
    },
    {
      id: 3,
      name: "Sábado 1 Oct.",
      value: "10/01/2022",
      inputName: "date",
      link: "/#Letter"
    },
    {
      id: 4,
      name: "Domingo 2 Oct.",
      value: "10/02/2022",
      inputName: "date",
      link: "/#Letter"
    },
  ]

  return (
    <ManyOptions
      title="Qué día prefieres ir a cenar?"
      type="Date"
      options={dishes}
    />
  )
}

export default Date;