import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import type { BudgetType } from "../../utils/appTypes";

const BudgetForm = ({ refetchBudget }: { refetchBudget: () => void }) => {
  const createBudget = useMutation({
    mutationFn: (budget: BudgetType) => {
      return axios.post('http://localhost:3001/api/v1/budgets', budget)
    }
  });

  const [ plannedAmount, setPlannedAmount ] = useState(0);
  const [ remainingAmount, setRemainingAmount ] = useState(0);
  
  const handleChangeAmount = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value === '' || event.target.value === null ? 0 : Number(event.target.value.replace(/\+|-/ig, ''));
    setPlannedAmount(value);
    setRemainingAmount(value);
  }

  const handleSubmit = () => {
    createBudget.mutate({
      planned_amount: plannedAmount,
      remaining_amount: remainingAmount,
      budget_date: new Date()
    });
    refetchBudget();
  }

  return (
    <form action="{handleSubmit}">
      <label htmlFor="planned-amount">Enter budget amount:
        <input type="number" id="planned-amount" onChange={handleChangeAmount} placeholder="Enter planned amount" />
      </label>
      <button type="submit" onClick={() => handleSubmit()}>Create</button>
    </form>
  );
}

export default BudgetForm;