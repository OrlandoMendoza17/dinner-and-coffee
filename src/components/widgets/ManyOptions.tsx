import React from 'react'
import { OptionProps, OptionType } from '../../../types'
import Option from './Option'

type Props = {
  options: OptionType[],
  type: string,
  inputName: string,
  title: string,
}

const ManyOptions = ({ type, options, title, inputName }: Props) => {
  const props = { inputName }
  return (
    <section id={type} className={type}>
      <div className="main-container">
        <h2 className="title">{title}</h2>
        <hr />
        <div className="options">
          {
            options.map(option =>
              <Option {...props} {...option} key={option.id} />
            )
          }
        </div>
      </div>
    </section>
  )
}

export default ManyOptions