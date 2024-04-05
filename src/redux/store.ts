import { configureStore } from '@reduxjs/toolkit';
import budgetsReducer from './slices/budgetsSlice';
import { useDispatch } from 'react-redux';
import dateReducer from './slices/dateSlice';

const store = configureStore({
  reducer: {
    budgets: budgetsReducer,
    date: dateReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
