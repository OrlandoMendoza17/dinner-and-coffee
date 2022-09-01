import React from 'react'
import Image from 'next/image'
import comiendoCotufas from "@/assets/comiendo-cotufas.gif"
import { useRouter } from 'next/router'

const Hero = () => {
  
  const router = useRouter()
  
  return (
    <section className="flex justify-center items-center px-10 py-10" style={{ height: "100vh" }}>
      <div className="bg-white drop-shadow-2xl rounded-3xl p-5">
        <Image
          src={comiendoCotufas}
          width={400}
          height={400}
          className="cursor-pointer"
          alt="comiendo-cotufas"
          onClick={() => router.push("/#Menu")}
        />
      </div>
    </section>
  )
}

export default Hero