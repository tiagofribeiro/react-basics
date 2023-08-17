import ExpenseItem from "./components/ExpenseItem";

export default function App() {
  const expenses = [
    { id: 0, date: new Date(2023, 7, 7), title: 'Aluguel', amount: 1800 },
    { id: 1, date: new Date(2023, 7, 17), title: 'Mercado', amount: 200.50, },
    { id: 2, date: new Date(2023, 7, 30), title: 'Carro', amount: 800 },
  ];

  return (
    <div>
      <h2>Vamos começar!</h2>
      <p>Só testando um JSX</p>
      {expenses.map((expense) => {
        return <ExpenseItem
          date={expense.date}
          title={expense.title}
          amount={expense.amount} />
      })};
    </div>
  );
}