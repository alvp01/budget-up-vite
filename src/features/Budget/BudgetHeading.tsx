import { useDispatch } from "react-redux";
import { setDate } from "../../redux/slices/dateSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

type BudgetHeadingProps = {
  queryDate: string
}

const BudgetHeading = ({queryDate}: BudgetHeadingProps) => {
  const dispatch = useDispatch();
  const date = new Date(queryDate);

  const handleMonthChange = (input: number) => {
    date.setMonth(date.getMonth() + input);
    dispatch(setDate(date.toString()));
  }

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return (
    <div className="budget-heading full-width">
      <h1 className="test">{months[date.getMonth()]}
        <span className="text-gray-500"> {date.getFullYear()}</span>
      </h1>
      <div className="budget-heading-btns-container">
        <button onClick={() => handleMonthChange(-1)}> <FontAwesomeIcon icon={faChevronLeft}/> </button>
        <button onClick={() => handleMonthChange(1)}><FontAwesomeIcon icon={faChevronRight}/></button>
      </div>
    </div>
  );
};

export default BudgetHeading;