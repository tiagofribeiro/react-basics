import Card from '../atoms/Card';
import ExpenseDate from '../molecules/ExpenseDate';
import './ExpenseItem.css';

export default function ExpenseItem({ date, title, amount }) {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>
                    R$ {amount}
                </div>
            </div>
        </Card>
    );
}