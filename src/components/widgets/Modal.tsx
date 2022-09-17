import React, { FormEvent } from 'react'

type Props = {
  trigger: boolean,
  buttonLabel: string,
  color: string,
  onClick: (event: FormEvent<HTMLButtonElement>) => void,
  children: JSX.Element
}

const Modal = ({ trigger, onClick, color, buttonLabel, children }: Props) => {
  return (
    <>
      {
        trigger &&
        <div className="modal-overlay">
          <div className="Modal">
            <button className="close-button">X</button>
            <div className="container">
              {children}
              <button onClick={onClick} className={color}>
                {buttonLabel}
              </button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Modal