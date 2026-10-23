import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>(); // store'ga o'zgartirish yuborish
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // store'dan ma'lumot o'qish
