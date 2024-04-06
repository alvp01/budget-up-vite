const getDateYearAndMonth = (date: Date) => {
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

  return [date.getFullYear(), months[date.getMonth()]];
}

export { getDateYearAndMonth };