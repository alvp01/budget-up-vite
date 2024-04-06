import Budget from "./Budget";
import BudgetForm from "./BudgetForm";
import type { BudgetType } from "../../utils/appTypes";

type BudgetDataType = {
  budget: BudgetType | null
  existing_budget: boolean
}

type BudgetItemsProps = {
  budgetData: BudgetDataType
  refetchBudget: () => void
  queryDateObject: Date
}

const BudgetItems = ({ budgetData, refetchBudget, queryDateObject }: BudgetItemsProps) => {

  return (
    <div className="budget-items" id="budget-items">
      { budgetData.existing_budget ? <Budget {...budgetData.budget!}/> : <BudgetForm refetchBudget={refetchBudget} queryDateObject={queryDateObject}/> }
    </div>
  )
}

export default BudgetItems;