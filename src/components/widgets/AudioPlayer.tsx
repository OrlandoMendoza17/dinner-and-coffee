import React, { useEffect, useRef, useState } from 'react'
import Play from '@/components/icons/Play'
import Pause from '@/components/icons/Pause'
import Volume from '@/components/icons/Volume'
import Mute from '@/components/icons/Mute'
import Cross from '../icons/Cross'

type Props = {
  playDefault?: boolean;
  volumeDefault?: boolean;
  audio: string;
  hidden?: boolean,
  closePlayer: () => void,
  song: {
    current: HTMLAudioElement | null
  }
}

const AudioPlayer = ({ playDefault = false, volumeDefault = false, audio, song, hidden = false, closePlayer }: Props) => {

  const [play, setPlay] = useState(playDefault || !song.current?.paused)
  const [volume, setVolume] = useState(volumeDefault)

  const BUTTON_SIZE = 25

  useEffect(() => {
    if (song.current && playDefault) {
      song.current.play()
    }
  }, [])


  const handlePlay = () => {
    setPlay(!play)
    debugger

    if (song.current) {

      if (!play) {

        song.current.play()

      } else {

        song.current.pause()

      }

    }
  }

  const handleVolume = () => {
    setVolume(!volume)
    debugger
    if (song.current) {
      song.current.muted = !volume
    }
  }


  return (
    <div className={`AudioPlayer ${hidden ? "hidden" : ""}`}>

      <button onClick={handlePlay}>
        {
          play ?
            <Pause size={BUTTON_SIZE} />
            :
            <Play size={BUTTON_SIZE} />
        }
      </button>

      <button onClick={handleVolume}>
        {
          volume ?
            <Mute size={BUTTON_SIZE} />
            :
            <Volume size={BUTTON_SIZE} />
        }
      </button>

      <button onClick={()=>{
        closePlayer()
        
        if(song.current){
          song.current.pause()
        }
      }}>
        <Cross size={BUTTON_SIZE} />
      </button>

      <audio ref={song} src={audio}></audio>

    </div>
  )
}

export default AudioPlayer
