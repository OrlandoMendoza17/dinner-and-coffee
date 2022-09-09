import Image from 'next/image'
import React, { useContext } from 'react'
import comiendoCotufas from "@/assets/comiendo-cotufas.gif"
import AppContext from 'context'
type Props = {

}

const Letter = (props: Props) => {

  const { coffee, dinner } = useContext(AppContext).state
  
  const handleClick = () => {

  }

  return (
    <section id="Letter" className="Letter">
      <div className="main-container">
        <h2 className="title">Agenda en el calendario</h2>
        <hr />
        <div className="content">

          <div className="text-8xl">
            {coffee ? "☕" : ""} + 🎁 + {dinner.emoji}
          </div>

          <button type="button" className="BadgeOption" onClick={() => alert("Hello there! 🍔")}>
            <div className="badge">
              <Image
                width={250}
                height={250}
                src={comiendoCotufas}
                className="cursor-pointer"
                alt="comiendo-cotufas"
                onClick={handleClick}
              />
            </div>
            <span className={`label`}>Guardar en el calendario</span>
          </button>

        </div>
      </div>
    </section>
  )
}

export default Letter