import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useQuery } from "@tanstack/react-query";
import BudgetService from "../services/BudgetService";
import BudgetItems from "../features/Budget/BudgetItems";

const MainPage = () => {
  const queryDate = useSelector((state: RootState) => state.date.date);
  const dateObject = new Date(queryDate);

  const { 
    error,
    isError,
    data: budgetData,
    isLoading,
    refetch: refetchBudget,
  } = useQuery({
    queryKey: ['budgetData', queryDate],
    queryFn: () => BudgetService.getBudgetByYearAndMonth(dateObject.getFullYear(), dateObject.getMonth() + 1),
  });

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>{error.message}</div>


  return (
    <div className="main-page full-height full-width" id="main-page">
      <BudgetItems budgetData={budgetData!} queryDate={queryDate} refetchBudget={refetchBudget}/>
    </div>
  );
};

export default MainPage;