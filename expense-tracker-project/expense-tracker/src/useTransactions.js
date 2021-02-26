import { useGlobalContext } from "./context/context";
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/categories";

const useTransactions = ({ title }) => {
  resetCategories();
  const { transactions } = useGlobalContext();
  const transactionsPerType = transactions.filter(
    (item) => item.type === title
  );
  const total = transactionsPerType.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );

  const categories = title === "Income" ? incomeCategories : expenseCategories;

  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) {
      category.amount = t.amount;
    }
  });

  const filteredCategories = categories.filter((c) => c.amount > 0);

  const chartDTO = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };

  return { total, chartDTO };
};

export default useTransactions;
