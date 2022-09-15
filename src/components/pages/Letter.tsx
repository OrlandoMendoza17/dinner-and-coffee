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

type Props = {

}

const Letter = (props: Props) => {

  const { state } = useContext(AppContext)
  const { coffee, date, dinner } = state

  const acdc = useRef<HTMLAudioElement | null>(null)

  const handleClick = async () => {
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
          email: 'leomarby@yahoo.com'
        }
      ],
      // an event that recurs every two weeks:
    }

    const googleCalendarLink = new GoogleCalendar(config).render()

    if (acdc.current) {
      acdc.current.volume = 0.1
      acdc.current.play()
    }

    window.open(googleCalendarLink)
    setEndWindow(true)

    const response = await axios.post("/api/mail", { state })
    console.log(response.data)
  }

  const alreadyFilledForm = (!!dinner.id && !!date)

  const [endWindow, setEndWindow] = useState(false)

  const emojis = {
    "🍗🍟": (
      <>
        <img src="https://i.imgur.com/ISx7NFd.png" className='image' alt=''/>
        <img src="https://i.imgur.com/pitXDpg.png" className='image' alt=''/>
      </>
    ),
    "🥩🍟": (
      <>
        <img src="https://i.imgur.com/YndQXoE.png" className='image' alt=''/>
        <img src="https://i.imgur.com/pitXDpg.png" className='image' alt=''/>
      </>
    ),
    "🍔🍟": (
      <>
        <img src="https://i.imgur.com/XlYRvnv.png" className='image' alt=''/>
        <img src="https://i.imgur.com/pitXDpg.png" className='image' alt=''/>
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
              <h2 className="title">Agenda en el calendario</h2>
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
            <audio ref={acdc} src="https://mus9.gomusic.fm/9403bc84-ce3e-49b7-bd0d-3beab78972846d02.mp3"></audio>
          </section>
          :
          null
      }
      <Modal
        trigger={endWindow}
        color="bg-green-300 hover:bg-cyan-500"
        buttonLabel={`Nos vemos el ${shortDate(date)}`}
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
          <strong className="text-xl pb-5">PD: Disfruta la canción 😉🎸</strong>
        </>
      </Modal>
    </>
  )
}

export default Letter