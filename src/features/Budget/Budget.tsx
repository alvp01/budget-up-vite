import type { BudgetType } from "../../utils/appTypes";

 const Budget = ({ planned_amount, remaining_amount, budget_date }: BudgetType) => {

  return (
    <div>
      <h1>Budget</h1>
      <p>Planned amount: {planned_amount}</p>
      <p>Remaining amount: {remaining_amount}</p>
      <p>Budget date: {budget_date.toString()}</p>
    </div>
  );
}

export default Budget;