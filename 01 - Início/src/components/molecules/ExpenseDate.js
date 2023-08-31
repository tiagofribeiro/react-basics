import Card from '../atoms/Card';
import './ExpenseDate.css';

export default function ExpenseDate({ date }) {
    const day = date.toLocaleString("pt-BR", { day: "2-digit" });
    const month = date.toLocaleString("pt-BR", { month: "long" });
    const year = date.getFullYear();

    return (
        <Card className='expense-date'>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
        </Card>
    );
}