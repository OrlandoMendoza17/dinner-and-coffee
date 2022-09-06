import React, { useRef } from 'react'
import { OptionProps } from '../../../types'
import Link from 'next/link'

const Option = ({ id, name, details, image, link, inputName }: OptionProps) => {
  const inputID = `${name.replace(" ", "-")}-${id}`

  const option = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    console.log(option.current)
    if (option.current) {
      option.current.checked = true
    }
  }

  const props = { inputID, option, handleClick }

  return (
    <Link href={link}>
      <a>
        <label
          htmlFor={inputID}
          className="Option block"
          style={{ backgroundImage: `url(${image})` }}
          onClick={handleClick}
        >
          <input
            id={inputID}
            ref={option}
            type="radio"
            name={inputName}
          />
          <div className={`overlay${!details ? "-static" : ""}`} >
            <h2>{name}</h2>
            {
              !!details && <p>{details.join(", ")}</p>
            }
          </div>
        </label>
      </a>
    </Link>
  )
}

export default Option