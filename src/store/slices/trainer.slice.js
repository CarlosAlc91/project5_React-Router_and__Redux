import { createSlice } from "@reduxjs/toolkit";

/* definicion del estado global */

const initialState = {
  name: "",
};

const trainerSlice = createSlice({
  initialState,
  /* nombre del estado */
  name: "trainer",
  /* reducers */
  reducers: {
    /* accion que modifique el estado */
    loginTrainer: (state, action) => {
      const newName = action.payload;
      /* mutacion del estado o redefinir la propiedad */
      state.name = newName;
    },
  },
});

export const { loginTrainer } = trainerSlice.actions;

export default trainerSlice.reducer;
