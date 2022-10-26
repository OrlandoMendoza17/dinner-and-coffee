import React, { FormEvent, useContext } from 'react'
import Image from 'next/image'
import { YesOrNoOption } from '../../../types'
import AppContext from 'context'

type Props = {
  question: JSX.Element,
  options: YesOrNoOption[],
}

const YesOrNo = ({ question, options }: Props) => {

  const { saveState } = useContext(AppContext)

  const handleChange = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    const { checked, name, value } = currentTarget

    if (checked) {
      console.log(checked, name)
      saveState({ [name]: JSON.parse(value) })
    }
  }

  return (
    <div className="YesOrNo">
      <div className="flex flex-col justify-center items-center">
        <h1 className="title">{question}</h1>
        <div className="main-container">
          {
            options.map(({ type, image, label, value, inputName, action }, i) =>
              <label htmlFor={type + inputName} className="BadgeOption" key={i}>
                <div className="badge">
                  <Image
                    width={250}
                    height={250}
                    src={image}
                    className="cursor-pointer"
                    alt="comiendo-cotufas"
                  />
                </div>
                
                <input className="hidden" onChange={handleChange} onClick={action} type="radio" value={value} name={inputName} id={type + inputName} />
                <span className={`label`}>{label}</span>
                
              </label>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default YesOrNo