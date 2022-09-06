import React from 'react'
import Image from 'next/image'
import { YesOrNoOption } from '../../../types'

type Props = {
  question: string,
  options: YesOrNoOption[]
}

const YesOrNo = ({ question, options }: Props) => {
  return (
    <section className="Hero">
      <div className="flex flex-col justify-center items-center">
        <h1 className="title">{question}</h1>
        <div className="main-container">
          {
            options.map(({ type, image, label, action }, i) =>
              <label htmlFor={type} className="option" key={i}>
                <div className="badge">
                  <Image
                    width={250}
                    height={250}
                    src={image}
                    className="cursor-pointer"
                    alt="comiendo-cotufas"
                    onClick={action}
                  />
                </div>
                <input className="hidden" type="radio" value={type} name="question" id={type} />
                <span className={`label`}>{label}</span>
              </label>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default YesOrNo