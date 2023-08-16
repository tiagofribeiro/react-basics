import './ExpenseItem.css';

export default function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>16/08/2023</div>
            <div className='expense-item__description'>
                <h2>Mercado</h2>
                <div className='expense-item__price'>R$200,50</div>
            </div>
        </div>
    );
}