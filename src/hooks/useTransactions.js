import { useContext } from "react";
import { ExpenseTrackerContext } from "../context/context";
import {
  incomeCategories,
  expenseCategories,
  resetCategories
} from "../context/categories";

const useTransactions = title => {
  resetCategories();
  const { transection } = useContext(ExpenseTrackerContext);
  const transectionPerType = transection.filter(t => t.type === title);
  const total = transectionPerType.reduce(
    (acc, curr) => (acc += curr.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  transectionPerType.forEach(t => {
    const category = categories.find(c => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter(sc => sc.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map(c => c.amount),
        backgroundColor: filteredCategories.map(c => c.color)
      }
    ],
    labels: filteredCategories.map(c => c.type)
  };

  return { total, chartData };
};

export default useTransactions;
