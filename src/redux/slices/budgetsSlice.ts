import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { BudgetType } from '../../utils/appTypes';

interface BudgetsState {
  budgets: BudgetType[];
}

const initialState: BudgetsState = {
  budgets: [],
};

const budgetsSlice = createSlice({
  name: 'budgets',
  initialState,
  reducers: {
    addBudget: (state, action: PayloadAction<BudgetType>) => {
      state.budgets.push(action.payload);
    },
    removeBudget: (state, action: PayloadAction<number>) => {
      state.budgets = state.budgets.filter((budget: BudgetType) => budget.id !== action.payload);
    },
    setBudgets: (state, action: PayloadAction<Array<BudgetType>>) => {
      state.budgets = action.payload;
    },
  },
});

export const { addBudget, removeBudget, setBudgets } = budgetsSlice.actions;
export default budgetsSlice.reducer;