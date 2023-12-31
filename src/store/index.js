/* configuracion de la store de redux */

import { configureStore } from "@reduxjs/toolkit"
import trainerSlice from "./slices/trainer.slice"

export default configureStore({
  reducer: {
    trainer: trainerSlice,
  }
})