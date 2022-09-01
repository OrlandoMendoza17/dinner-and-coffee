import React from 'react'
import Image from 'next/image'
import comiendoCotufas from "@/assets/comiendo-cotufas.gif"
import gaticoFeliz from "@/assets/gatico-feliz.webp"
import devilAngel from "@/assets/jack-devil-angel.gif"
import { useRouter } from 'next/router'

const Hero = () => {

  const router = useRouter()

  const options = [
    {
      type: "YES",
      label: "Claro que yes!",
      image: gaticoFeliz,
      action: () => router.push("/#Menu")
    },
    {
      type: "NO",
      label: "Ahora no, lo siento!",
      image: devilAngel,
      action: () => alert("😭😭😭😭😭")
    }
  ]

  return (
    <section className="Hero">
      <div className="flex flex-col justify-center items-center">
        <h1 className="title">Te invito a cenar!, Vienes? ❤</h1>
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

export default Hero