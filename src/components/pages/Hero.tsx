import React, { useState } from "react"
import gaticoFeliz from "@/assets/gatico-feliz.webp"
import devilAngel from "@/assets/jack-devil-angel.gif"
import { useRouter } from "next/router"
import { YesOrNoOption } from "../../../types"
import YesOrNo from "../widgets/YesOrNo"
import Modal from "../widgets/Modal"
import Image from "next/image"
import gaticoExplotando from "@/assets/gatico-explotando.webp";

const Hero = () => {
  const router = useRouter()

  const [notAccepted, setNotAccepted] = useState(false)

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
      action: () => {
        setNotAccepted(true)
      }
    }
  ]
  
  const handleClick = () => {
    setNotAccepted(false)
  }

  return (
    <section id="Hero">
      <YesOrNo question="Te invito a cenar!, Vienes? ❤" options={options} />
      <Modal
        trigger={notAccepted}
        color="bg-blue-300 hover:bg-blue-500"
        buttonLabel="Intenta de nuevo"
        onClick={handleClick}
      >
        <Image
          width={350}
          height={350}
          src={gaticoExplotando}
          className="cursor-pointer"
          alt="comiendo-cotufas"
        />
      </Modal>
    </section>
  )
}

export default Hero