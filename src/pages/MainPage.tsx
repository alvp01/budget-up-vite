import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useQuery } from "@tanstack/react-query";
import BudgetService from "../services/BudgetService";
import BudgetItems from "../features/Budget/BudgetItems";
import BudgetHeading from "../features/Budget/BudgetHeading";

const MainPage = () => {
  const queryDateString = useSelector((state: RootState) => state.date.date);
  const queryDateObject = new Date(queryDateString);

  const { 
    error,
    isError,
    data: budgetData,
    isLoading,
    refetch: refetchBudget,
  } = useQuery({
    queryKey: ['budgetData', queryDateString],
    queryFn: () => BudgetService.getBudgetByYearAndMonth(queryDateObject.getFullYear(), queryDateObject.getMonth() + 1),
  });


  if (isError) return <div>{error.message}</div>


  return (
    <div className="main-page full-height full-width" id="main-page">
      <BudgetHeading queryDateObject={queryDateObject}/>
      { isLoading ? <Loader fullPage={true} message="budgets" /> : <BudgetItems budgetData={budgetData!} refetchBudget={refetchBudget} queryDateObject={queryDateObject}/>}
    </div>
  );
};

export default MainPage;