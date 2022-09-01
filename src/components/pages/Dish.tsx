import React from 'react'
import { DishType } from '../../../types'

type Props = {
  dish: DishType
}

const Dish = ({ dish }: Props) => {

  const { id, name, details, image } = dish

  const inputID = `${dish.name.replace(" ", "-")}-${id}`

  return (
    <label htmlFor={inputID} className="Dish" style={{ backgroundImage: `url(${image})` }}>
      <input
        id={inputID}
        type="radio"
        name="parrilla"
        className=""
      />
      <div className={`overlay`} >
        <h2>{name}</h2>
        <p>{details.join(", ")}</p>
      </div>
    </label>
  )
}

export default Dish