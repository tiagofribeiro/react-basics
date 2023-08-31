import Card from '../atoms/Card';
import ExpenseItem from '../organisms/ExpenseItem';
import './Expenses.css';

export default function Expenses() {
    const expenses = [
        { id: 0, date: new Date(2023, 7, 7), title: 'Aluguel', amount: 1800 },
        { id: 1, date: new Date(2023, 7, 17), title: 'Mercado', amount: 200.50, },
        { id: 2, date: new Date(2023, 7, 30), title: 'Carro', amount: 800 },
    ];
    return (
        <Card className='content'>
            {expenses.map((expense) => {
                return <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount} />
            })}
        </Card>
    );
}