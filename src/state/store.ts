import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter/counter-slice";


export const store= configureStore({
  reducer: {
    counter: counterSlice,
  },
})

export type TRootState= ReturnType<typeof store.getState>;
export type TAppDispatch= typeof store.dispatch;