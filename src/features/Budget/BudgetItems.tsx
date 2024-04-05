import Budget from "./Budget";
import BudgetForm from "./BudgetForm";
import BudgetHeading from "./BudgetHeading";
import type { BudgetType } from "../../utils/appTypes";

type BudgetDataType = {
  budget: BudgetType | null
  existing_budget: boolean
}

type BudgetItemsProps = {
  budgetData: BudgetDataType
  queryDate: string
  refetchBudget: () => void
}

const BudgetItems = ({ budgetData, queryDate, refetchBudget }: BudgetItemsProps) => {

  return (
    <div className="budget-items" id="budget-items">
      <BudgetHeading queryDate={queryDate} budget={budgetData.budget}/>
      { budgetData.existing_budget ? <Budget {...budgetData.budget!}/> : <BudgetForm refetchBudget={refetchBudget}/> }
    </div>
  )
}

export default BudgetItems;