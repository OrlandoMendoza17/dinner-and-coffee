import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { YesOrNoOption } from '../../../types'
import YesOrNo from '../widgets/YesOrNo'
import gaticoConJuguito from "@/assets/flork-cafe.webp"
import gaticoConCorazones from "@/assets/flork-espada.png"

const Coffee = () => {

  const router = useRouter()

  const [selected, setSelected] = useState(false)

  const options: YesOrNoOption[] = [
    {
      type: "YES",
      label: "Me encataría!",
      image: gaticoConJuguito,
      action: () => {
        setSelected(true)
        setTimeout(() => router.push("/#Date"), 5000)
      }
    },
    {
      type: "NO",
      label: "No, solo la cena",
      image: gaticoConCorazones,
      action: () => {
        alert("😭😭😭😭😭")
        setSelected(true)
      }
    }
  ]

  return (
    <section id="Coffee" className={`Coffee ${selected && "active"}`}>
      <div className="coffee-cover">
        <img src="https://i.imgur.com/RmYJOvs.png" alt="" />
      </div>
      <YesOrNo question="Vamos por un ☕ antes de la cena?" options={options} />
    </section>
  )
}

export default Coffee
