import React from 'react'
import { OptionProps, OptionType } from '../../../types';
import ManyOptions from '../widgets/ManyOptions';

const Menu = () => {

  const dishes: OptionType[] = [
    {
      id: 1,
      name: "Parrilla mixta",
      details: ["Carne", "pollo", "chorizo", "chuleta", "papas"],
      image: "https://i.imgur.com/xIbzUT3.jpg",
      link: "/#Coffee"
    },
    {
      id: 2,
      name: "Parrilla de carne",
      details: ["Carne", "papas"],
      image: "https://i.imgur.com/iywniLm.jpg",
      link: "/#Coffee"
    },
    {
      id: 3,
      name: "Hamburgesa de carne",
      details: ["150gr de Carne", "pepinillo", "lechga", "tomate", "cebolla morada", "papitas"],
      image: "https://i.imgur.com/QSBEsVQ.jpg",
      link: "/#Coffee"
    },
    {
      id: 4,
      name: "Hamburgesa de pollo Crispy",
      details: ["Pechuga Crispy", "pepinillo", "lechga", "tomate", "cebolla morada", "papitas"],
      image: "https://i.imgur.com/ZOqGe3u.jpg",
      link: "/#Coffee"
    },
  ]

  return (
    <ManyOptions
      title="Elección de Menú"
      type="Menu"
      options={dishes}
      inputName="parrilla"
    />
  )
}

export default Menu;