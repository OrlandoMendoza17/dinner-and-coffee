import React, { FormEvent } from 'react'
import { OptionType } from '../../../types'
import Option from './Option'

type Props = {
  options: OptionType[],
  type: string,
  title: string,
}

const ManyOptions = ({ type, options, title }: Props) => {
  return (
    <section id={type} className={type}>
      <div className="main-container">
        <h2 className="title">{title}</h2>
        <hr />
        <div className="options">
          {
            options.map(option =>
              <Option option={option} key={option.id} />
            )
          }
        </div>
      </div>
    </section>
  )
}

export default ManyOptions