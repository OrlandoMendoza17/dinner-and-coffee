import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { YesOrNoOption } from '../../../types'
import YesOrNo from '../widgets/YesOrNo'
import florkCafe from "@/assets/flork-cafe.webp"
import florkEspada from "@/assets/flork-espada.png"

const Coffee = () => {

  const router = useRouter()

  const [selected, setSelected] = useState(false)

  const options: YesOrNoOption[] = [
    {
      type: "YES",
      label: "Me encantaría!",
      image: florkCafe,
      inputName: "coffee",
      value: "true",
      action: () => {
        setSelected(true)
        setTimeout(() => router.push("/#Date"), 6000)
      }
    },
    {
      type: "NO",
      label: "No, solo la cena",
      image: florkEspada,
      inputName: "coffee",
      value: "false",
      action: () => {
        setSelected(false)
        router.push("/#Date")
      }
    }
  ]

  return (
    <section id="Coffee" className={`Coffee ${selected && "active"}`}>
      <div className="coffee-cover">
        <div className="overlay">
          <p>&quot;Detras de una taza de café hay historias y momentos inolvidables&quot;</p>
          {/* <p className="pr-10 pt-10">- Emmanuel Zavala</p> */}
        </div>
      </div>
      <YesOrNo question={(<div>Vamos por un <img src="https://i.imgur.com/vyiRS5X.png" className="image" alt="" /> antes de la cena?</div>)} options={options} />
    </section>
  )
}

export default Coffee
