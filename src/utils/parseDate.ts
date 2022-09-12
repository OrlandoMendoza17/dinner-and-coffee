import { format } from "date-fns"
import { es } from "date-fns/locale"
import { firstLetterUpperCase } from "utils"

export const shortDate = (date: string) => {
  return firstLetterUpperCase(format(new Date(date), "cccc, dd", {locale: es}))
  // It returns something like this:
  // "miércoles, 14"
}

export const longDate = (date: string) => {
  return firstLetterUpperCase(format(new Date(date), "cccc, dd 'de' MMMM 'del' yyyy", {locale: es}))
  // It returns something like this:
  // "miércoles, 14 de octubre del 2020"
}

export const ISODate = (date: string) =>{
  return format(new Date(date), "yyyy-MM-dd")
}