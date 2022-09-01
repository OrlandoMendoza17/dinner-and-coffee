import React from 'react'
import { DishType } from '../../../types';
import Dish from './Dish';

const Menu = () => {
  
  const dishes: DishType[] = [
    {
      id: 1,
      name: "Parrilla mixta",
      details: ["Carne", "pollo", "chorizo", "chuleta", "papas"],
      image: "https://i.imgur.com/xIbzUT3.jpg"
    },
    {
      id: 2,
      name: "Parrilla de carne",
      details: ["Carne", "papas"],
      image: "https://i.imgur.com/25o8Tdg.png"
    },
    {
      id: 3,
      name: "Hamburgesa de carne",
      details: ["150gr de Carne", "pepinillo", "lechga", "tomate", "cebolla morada", "papitas"],
      image: "https://i.imgur.com/QSBEsVQ.jpg"
    },
    {
      id: 4,
      name: "Hamburgesa de pollo Crispy",
      details: ["Pechuga Crispy", "pepinillo", "lechga", "tomate", "cebolla morada", "papitas"],
      image: "https://i.imgur.com/ZOqGe3u.jpg"
    },
  ]
  
  return (
    <section id="Menu" className="Menu">
      <div className="main-container">
        <h2 className="title">Elegir parrilla</h2>
        <div className="dishes">
          {
            dishes.map(dish =>
              <Dish dish={dish} key={dish.id} />
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Menu;