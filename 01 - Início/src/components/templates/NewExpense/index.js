import Card from "../../atoms/Card";
import { FormContainer, FormItem } from './style.js';

export default function NewExpense(props) {
    function titleChangeHandler() {

    }

    return (
        <Card class='content'>
            <form>
                <FormContainer>
                    <FormItem>
                        <label>Despesa</label>
                        <input type="text" onChange={titleChangeHandler} />
                    </FormItem>
                    <FormItem>
                        <label>Data</label>
                        <input type="date" onChange={titleChangeHandler} />
                    </FormItem>
                    <FormItem>
                        <label>Valor</label>
                        <input type="number" onChange={titleChangeHandler} />
                    </FormItem>
                </FormContainer>
            </form>
        </Card>
    );
}