import React from 'react'
import Image from 'next/image'
import comiendoCotufas from "@/assets/comiendo-cotufas.gif"
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
    <YesOrNo question="Te invito a cenar!, Vienes? ❤" options={options}/>
  )
}

export default Hero