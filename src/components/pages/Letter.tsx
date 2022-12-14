import Image from 'next/image'
import React, { useContext, useRef, useState } from 'react'
import AppContext from 'context'
import { CalendarOptions, GoogleCalendar } from 'datebook'
import Modal from '../widgets/Modal'
import gaticoConJuguito from "@/assets/gatico-con-juguito.webp"
import gaticoConGorra from "@/assets/gatico-con-gorra.webp"
import axios from 'axios'
import { ISODate, shortDate } from 'utils/parseDate'
import { OptionType } from '../../../types'
import AudioPlayer from '../widgets/AudioPlayer'
import { useRouter } from 'next/router'

type Props = {

}

const Letter = (props: Props) => {

  const { state } = useContext(AppContext)
  const { coffee, date, dinner } = state

  const [displaySong, setDisplaySong] = useState(true)
  const [hidden, setHidden] = useState(true)

  const acdc = useRef<HTMLAudioElement | null>(null)

  const router = useRouter()
  
  const handleClick = async () => {
    debugger
    const DEFAULT_DATE = "11/02/1999"
    
    if(date !== DEFAULT_DATE){
      
      const withCoffee = {
        start: new Date(`${ISODate(date)}T17:30:00`),
        end: new Date(`${ISODate(date)}T20:30:00`),
      }
  
      const withoutCoffee = {
        start: new Date(`${ISODate(date)}T18:30:00`),
        end: new Date(`${ISODate(date)}T20:30:00`),
      }
  
      type date = {
        start: Date,
        end: Date,
      }
  
      let dateTimes: date
  
      if (coffee) {
        dateTimes = withCoffee;
      } else {
        dateTimes = withoutCoffee;
      }
  
      const coffeeLocation = "987 Restaurant (☕), "
      const dinnerLocation = `La guacareña(${dinner.emoji})`
  
      const config: CalendarOptions = {
        title: 'Salida a Cenar 🥂',
        location: `${coffee ? coffeeLocation : ""}${dinnerLocation}`,
        description: `
          <strong>Actividades:</strong>\n
          
          ${coffee ? "-> Cafecito ☕\n" : ""}
          -> Sorpresa 🎁\n
          -> ${dinner.name} ${dinner.emoji}
        `,
        ...dateTimes,
        attendees: [
          {
            name: 'Orlando Mendoza',
            email: 'ommv.17@gmail.com',
          },
          {
            name: 'Leomarby Gonzalez',
            email: 'leomarbygb@gmail.com'
          }
        ],
        // an event that recurs every two weeks:
      }
  
      const googleCalendarLink = new GoogleCalendar(config).render()
  
      if (acdc.current) {
        setHidden(false)
        acdc.current.volume = 0.75
        acdc.current.play()
      }
  
      window.open(googleCalendarLink)
      setEndWindow(true)
  
      const response = await axios.post("/api/mail", { state })
      console.log(response.data)
      
    }else{
      router.push("/#Date")
      setTimeout(()=> alert("No has elegido una fecha :("), 500)
    }
  }

  const alreadyFilledForm = (!!dinner.id && !!date)

  const [endWindow, setEndWindow] = useState(false)

  const emojis = {
    "🍗🍟": (
      <>
        <img src="https://i.imgur.com/ISx7NFd.png" className='image' alt='' />
        <img src="https://i.imgur.com/pitXDpg.png" className='image' alt='' />
      </>
    ),
    "🥩🍟": (
      <>
        <img src="https://i.imgur.com/YndQXoE.png" className='image' alt='' />
        <img src="https://i.imgur.com/pitXDpg.png" className='image' alt='' />
      </>
    ),
    "🍔🍟": (
      <>
        <img src="https://i.imgur.com/XlYRvnv.png" className='image' alt='' />
        <img src="https://i.imgur.com/pitXDpg.png" className='image' alt='' />
      </>
    ),
  }

  const getEmoji = (string: string | undefined) => {
    return emojis[string as keyof typeof emojis]
  }

  return (
    <>
      {
        alreadyFilledForm ?
          <section id="Letter" className="Letter">
            <div className="main-container">
              <h2 className="title">Agenda un recordatorio en el calendario</h2>
              <hr />
              <div className="content">

                <div id="text" className="text-3xl sm:text-5xl md:text-7xl text-center text">
                  {coffee ? (<div><span><img src="https://i.imgur.com/vyiRS5X.png" className='image' alt="" /></span> + </div>) : ""}
                  <div><span><img src="https://i.imgur.com/2mbBxQy.png" className='image' width={70} alt="" /></span></div>
                  {dinner.id ? <div> + <span>{getEmoji(dinner.emoji)}</span></div> : ""}
                </div>

                <button type="button" className="BadgeOption" onClick={handleClick}>
                  <div className="badge">
                    <Image
                      width={250}
                      height={250}
                      src={gaticoConJuguito}
                      className="cursor-pointer"
                      alt="comiendo-cotufas"
                    />
                  </div>
                  <span className={`label`}>Guardar en el calendario</span>
                </button>

              </div>

            </div>
            <AudioPlayer
              song={acdc}
              hidden={hidden}
              closePlayer={() => setHidden(true)}
              audio="https://drive.google.com/u/0/uc?id=1jYwdwtARo0N9rynOaSbQm5V7Y886GoVW&export=download"
            />
          </section>
          :
          null
      }
      <Modal
        trigger={endWindow}
        color="bg-green-300 hover:bg-cyan-500 text-lg"
        buttonLabel={`Entonches nos vemos el ${shortDate(date)}`}
        onClick={() => setEndWindow(false)}
      >
        <>
          <Image
            width={300}
            height={300}
            src={gaticoConGorra}
            className="cursor-pointer"
            alt="comiendo-cotufas"
          />
          <strong className="text-xl text-black pt-5">
            PD: Disfruta la canción 😉🎸
          </strong>
        </>
      </Modal>
    </>
  )
}

export default Letter