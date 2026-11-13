import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePage from "./screens/homePage";
import HomePageReducer from "./screens/homePage/slice";

// Ilovaning butun state'i saqlanadigan yagona ombor
export const store = configureStore({
  reducer: {
    homePage: HomePageReducer,
  }, // state'ni o'zgartirish qoidalari (hozircha bo'sh)
});

export type AppDispatch = typeof store.dispatch; // dispatch funksiyasining turi
export type RootState = ReturnType<typeof store.getState>; // store'dagi ma'lumot turi
export type AppThunk<ReturnType = void> = ThunkAction<
  // async amallar uchun tur
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
