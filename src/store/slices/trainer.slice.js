import { createSlice } from "@reduxjs/toolkit"

/* definicion del estado global */

const initialState = {
  name: localStorage.getItem('trainerName') ?? '',
}

const trainerSlice = createSlice({
  initialState,
  /* nombre del estado */
  name: "trainer",
  /* reducers */
  reducers: {
    /* accion que modifique el estado */
    loginTrainer: (state, action) => {
      const newName = action.payload
      localStorage.setItem('trainerName', newName)
      /* mutacion del estado o redefinir la propiedad */
      state.name = newName
    },
    /* accion para hacer un logout */
    logout: (state) => {
      state.name = ''
      localStorage.removeItem('trainerName')
    }
  },
})

export const { loginTrainer, logout } = trainerSlice.actions

export default trainerSlice.reducer
