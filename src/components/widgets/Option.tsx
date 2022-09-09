import React, { FormEvent, useContext, useRef } from 'react'
import Link from 'next/link'
import { OptionType } from '../../../types'
import AppContext from 'context'

type Props = {
  option: OptionType,
}

const Option = ({ option }: Props) => {

  const state = useContext(AppContext)

  const { id, name, details, image, link, inputName } = option

  const inputID = `${name.replace(" ", "-")}-${id}`

  const optionInput = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (optionInput.current) {

      optionInput.current.checked = true

      if (state) {
        const { name } = optionInput.current
        state.saveState({
          [name]: name === "date" ? option.name : option
        })
      }
    }
  }

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
            ref={optionInput}
            type="radio"
            name={inputName}
            value={JSON.stringify(option)}
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