import React from 'react'
import { OptionType } from '../../../types';
import ManyOptions from '../widgets/ManyOptions';

const Date = () => {

  const dishes: OptionType[] = [
    // {
    //   id: 1,
    //   name: "Sábado 22 Oct.",
    //   value: "10/22/2022",
    //   inputName: "date",
    //   link: "/#Letter"
    // },
    {
      id: 2,
      name: "Domingo 23 Oct.",
      value: "10/23/2022",
      inputName: "date",
      link: "/#Letter"
    },
    {
      id: 3,
      name: "Sábado 29 Oct.",
      value: "10/29/2022",
      inputName: "date",
      link: "/#Letter"
    },
    {
      id: 4,
      name: "Domingo 30 Oct.",
      value: "10/30/2022",
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