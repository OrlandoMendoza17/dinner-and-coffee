import React from 'react'
import { OptionType } from '../../../types';
import ManyOptions from '../widgets/ManyOptions';

const Date = () => {

  const dishes: OptionType[] = [
    {
      id: 1,
      name: "Sábado 12 Nov.",
      value: "10/12/2022",
      inputName: "date",
      link: "/#Letter"
    },
    {
      id: 2,
      name: "Domingo 13 Nov.",
      value: "10/13/2022",
      inputName: "date",
      link: "/#Letter"
    },
    {
      id: 3,
      name: "Sábado 19 Nov.",
      value: "11/19/2022",
      inputName: "date",
      link: "/#Letter"
    },
    {
      id: 4,
      name: "Domingo 20 Nov.",
      value: "11/20/2022",
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