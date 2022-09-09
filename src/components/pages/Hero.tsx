import React, { useContext } from 'react'
import gaticoFeliz from "@/assets/gatico-feliz.webp"
import devilAngel from "@/assets/jack-devil-angel.gif"
import { useRouter } from 'next/router'
import { YesOrNoOption } from '../../../types'
import YesOrNo from '../widgets/YesOrNo'

const Hero = () => {
  const router = useRouter()

  const options: YesOrNoOption[] = [
    {
      type: "YES",
      label: "Claro que yes!",
      image: gaticoFeliz,
      inputName: "accept",
      value: "true",
      action: () => router.push("/#Menu")
    },
    {
      type: "NO",
      label: "Ahora no, lo siento!",
      image: devilAngel,
      inputName: "accept",
      value: "false",
      action: () => alert("😭😭😭😭😭")
    }
  ]

  return (
    <section id="Hero">
      <YesOrNo question="Te invito a cenar!, Vienes? ❤" options={options} />
    </section>
  )
}

export default Hero