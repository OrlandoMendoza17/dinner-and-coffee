import { type } from "os"
import { StaticImageData } from "next/image"

export type YesOrNoOption = {
  type: string,
  label: string,
  image: StaticImageData,
  action: () => void,
}

export type OptionType = {
  id: number,
  name: string,
  link: string,
  details?: string[],
  image?: string,
}

interface OptionProps extends OptionType{
  link: string,
  inputName: string,
}