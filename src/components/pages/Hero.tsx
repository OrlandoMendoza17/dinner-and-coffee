import React, { useRef, useState } from "react"
import gaticoFeliz from "@/assets/gatico-feliz.webp"
import devilAngel from "@/assets/jack-devil-angel.gif"
import { useRouter } from "next/router"
import { YesOrNoOption } from "../../../types"
import YesOrNo from "../widgets/YesOrNo"
import Modal from "../widgets/Modal"
import Image from "next/image"
import gaticoExplotando from "@/assets/gatico-explotando.webp";
import axios from "axios"

const Hero = () => {
  const router = useRouter()

  const [notAccepted, setNotAccepted] = useState(false)

  const $queen = useRef<HTMLAudioElement | null>(null)

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
      action: async () => {
        setNotAccepted(true)

        if ($queen.current) {
          $queen.current.currentTime = 39.7
          $queen.current.volume = .5
          $queen.current.play()
        }

        try {
          const response = await axios.get("/api/mail")
          console.log(response.data)
        } catch (error: any) {
          console.log(error)
        }
      }
    }
  ]

  const handleClick = () => {
    setNotAccepted(false)
    if ($queen.current) {
      $queen.current.pause()
    }
  }

  return (
    <section id="Hero">
      <YesOrNo question={(
        <>
          Te invito a cenar!, Vienes? <img src="https://i.imgur.com/ar70ewU.png" className="image" alt="" />
        </>
      )} options={options} />
      <Modal
        trigger={notAccepted}
        color="bg-blue-300 hover:bg-blue-500 text-xl"
        buttonLabel="Intenta de nuevo"
        onClick={handleClick}
      >
        <>
          <Image
            width={350}
            height={350}
            src={gaticoExplotando}
            className="cursor-pointer"
            alt="comiendo-cotufas"
          />
        </>
      </Modal>
                               
      <audio ref={$queen} src="https://mus2.gomusic.fm/aad553f3-7a7e-49be-9e04-3bca42aba01f6600.mp3"></audio>
    </section>
  )
}

export default Hero