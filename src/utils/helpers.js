export const createArrayRange = (startValue, endValue) => {
  const rangeArray = [];

  if (typeof startValue === 'number' && typeof endValue === 'number') {
    for (let i = startValue; i < endValue + 1; i++) {
      rangeArray.push(i);
    }
  }

  return rangeArray;
};

export const filterExpenses = (selectedYear, expenses) => {
  return selectedYear === ''
    ? expenses
    : expenses.filter(
        (expense) => expense.date.getFullYear().toString() === selectedYear
      );
};
