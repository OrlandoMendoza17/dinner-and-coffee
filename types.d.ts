import { type } from "os"
import { StaticImageData } from "next/image"

export type YesOrNoOption = {
  type: string,
  label: string,
  image: StaticImageData,
  inputName: "accept" | "coffee"
  value: "true" | "false",
  action: () => void,
}

export type OptionType = {
  id: number,
  name: string,
  inputName: "dinner" | "date",
  link: string,
  details?: string[],
  value?: string,
  emoji?: string,
  image?: string,
}

export type InitialStateType = {
  accept: boolean,
  coffee: boolean,
  dinner: OptionType,
  date: string,
}


export type DTOsaveState = Partial<InitialStateType>

export type AppContextType = {
  state: InitialStateType,
  saveState: (newState: DTOsaveState) => void
}

export type IconProps = {
  size: number,
  fill?: string,
  viewBox?: string,
  children?: JSX.Element,
}