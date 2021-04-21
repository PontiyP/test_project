import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";
import Form from "./Form";
import Board from "./components/Board";
import CreateCard from "./CreateCard";

const initialSpread = [{
    id: uuidv4(),
    amount: 0,
    interest: 0,
    term: 0,
}]

function App() {

    const [spread, setSpread] = useState(initialSpread);
    const reset = (setInterest, setTerm, setAmount) => {
        setSpread(initialSpread);
        setAmount('');
        setTerm('');
        setInterest('')
    };
    const calculate = (term, amount, interest) => {
        const data = [];
        console.log('calculate')

        for (let i = 0; i < term; i++) {
            data.push({
                id: uuidv4(),
                amount: amount - interest * (i + 1),
                interest: interest,
                term: i + 1,
            })
        }
        setSpread(data);
    };


    return (
        <div>
            {/*<Board data={spread}/>*/}
            {/*<ToDo/>*/}
            <Card/>
        </div>
    );
}

export default App;
