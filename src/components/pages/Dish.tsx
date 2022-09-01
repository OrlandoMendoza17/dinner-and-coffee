import Link from 'next/link'
import React, { useRef } from 'react'
import { DishType } from '../../../types'

type Props = {
  dish: DishType
}

const Dish = ({ dish }: Props) => {

  const { id, name, details, image } = dish

  const inputID = `${dish.name.replace(" ", "-")}-${id}`

  const option = useRef<HTMLInputElement>(null)
  
  const hancleClick = () => {
    console.log(option.current)
    if(option.current){
      option.current.checked = true
    }
  }
  
  return (
    <Link href="/#Coffee">
      <a>
        <label
          htmlFor={inputID}
          className="Dish block"
          style={{ backgroundImage: `url(${image})` }}
          onClick={hancleClick}
        >
          <input
            id={inputID}
            ref={option}
            type="radio"
            name="parrilla"
            className=""
          />
          <div className={`overlay`} >
            <h2>{name}</h2>
            <p>{details.join(", ")}</p>
          </div>
        </label>
      </a>
    </Link>
  )
}

export default Dish