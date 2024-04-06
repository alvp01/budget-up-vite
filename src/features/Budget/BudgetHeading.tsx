import { useDispatch } from "react-redux";
import { setDate } from "../../redux/slices/dateSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { getDateYearAndMonth } from "../../utils/helperFunctions";

type BudgetHeadingProps = {
  queryDateObject: Date
}

const BudgetHeading = ({queryDateObject}: BudgetHeadingProps) => {
  const dispatch = useDispatch();
  const [year, month] = getDateYearAndMonth(queryDateObject);

  const handleMonthChange = (input: number) => {
    queryDateObject.setMonth(queryDateObject.getMonth() + input);
    dispatch(setDate(queryDateObject.toString()));
  }

  return (
    <div className="budget-heading full-width">
      <h1>{month} <span className="text-gray-500"> {year}</span> </h1>
      <div className="budget-heading-btns-container">
        <button onClick={() => handleMonthChange(-1)}> <FontAwesomeIcon icon={faChevronLeft}/> </button>
        <button onClick={() => handleMonthChange(1)}><FontAwesomeIcon icon={faChevronRight}/></button>
      </div>
    </div>
  );
};

export default BudgetHeading;