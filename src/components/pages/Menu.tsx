import AppContext from 'context';
import React, { FormEvent, useContext } from 'react'
import { OptionType } from '../../../types';
import ManyOptions from '../widgets/ManyOptions';

const Menu = () => {

  const state = useContext(AppContext)

  const dishes: OptionType[] = [
    {
      id: 1,
      name: "Parrilla mixta",
      inputName: "dinner",
      emoji: "🍗🍟",
      details: ["Carne", "pollo", "chorizo", "chuleta", "papas"],
      image: "https://i.imgur.com/rcA1Evd.jpg",
      link: "/#Coffee"
    },
    {
      id: 2,
      name: "Parrilla de carne",
      inputName: "dinner",
      emoji: "🥩🍟",
      details: ["Carne", "papas"],
      image: "https://i.imgur.com/nbewAVB.jpg",
      link: "/#Coffee"
    },
    {
      id: 3,
      name: "Hamburgesa de carne",
      inputName: "dinner",
      emoji: "🍔🍟",
      details: ["150gr de Carne", "pepinillo", "lechga", "tomate", "cebolla morada", "papitas"],
      image: "https://i.imgur.com/fP34kLd.jpg",
      link: "/#Coffee"
    },
    {
      id: 4,
      name: "Hamburgesa de pollo Crispy",
      inputName: "dinner",
      emoji: "🍔🍟",
      details: ["Pechuga Crispy", "pepinillo", "lechga", "tomate", "cebolla morada", "papitas"],
      image: "https://i.imgur.com/XePYkVl.jpg",
      link: "/#Coffee"
    },
  ]

  return (
    <ManyOptions
      title="Elige tu favorito!"
      type="Menu"
      options={dishes}
    />
  )
}

export default Menu;