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
import AudioPlayer from "../widgets/AudioPlayer"

const Hero = () => {
  const router = useRouter()

  const [notAccepted, setNotAccepted] = useState(false)
  const [hidden, setHidden] = useState(true)

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
      label: "No quiero, lo siento!",
      image: devilAngel,
      inputName: "accept",
      value: "false",
      action: async () => {
        setNotAccepted(true)
        setHidden(false)

        if ($queen.current) {
          $queen.current.currentTime = 39.7
          $queen.current.volume = .75
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
    setHidden(true)
    router.push("#Hero")
    if ($queen.current) {
      $queen.current.pause()
    }
  }

  return (
    <section id="Hero">

      <YesOrNo
        options={options}
        question={(
          <>
            Leo, te invito a cenar!, Vienes? <img src="https://i.imgur.com/ar70ewU.png" className="image" alt="" />
          </>
        )}
      />

      <Modal
        trigger={notAccepted}
        color="bg-blue-300 hover:bg-blue-500 text-xl"
        buttonLabel="Quiero intentar de nuevo! 😬"
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

      <AudioPlayer
        hidden={hidden}
        song={$queen}
        closePlayer={() => setHidden(true)}
        audio="https://drive.google.com/u/0/uc?id=0B4LOzioZvYiXUXZ0Ri1PSFNySzQ&export=download"
      />

    </section>
  )
}

export default Hero