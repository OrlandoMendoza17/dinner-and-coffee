import { useState } from "react";
import { AppContextType, InitialStateType, DTOsaveState } from "../../types";

export const initialStateCtxt: InitialStateType = {
  accept: false,
  dinner: {
    id: 0,
    name: "",
    image: "",
    inputName: "dinner",
    emoji: "",
    link: "",
  },
  coffee: false,
  date: "",
}

const useInitialState = (): AppContextType => {

  const [state, setState] = useState(initialStateCtxt)

  const saveState = (newState: DTOsaveState) => {
    setState({ ...state, ...newState })
  }

  return {
    state,
    saveState,
  }
}

export default useInitialState;