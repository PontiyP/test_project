import React, {useState} from "react";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Form (props) {

    const [amount, setAmount] = useState(0);
    const [term, setTerm] = useState(0);
    const [interest, setInterest] = useState(0);
    return (
        <div className="input-group">
            <div className="form-floating">
                <input className="form-control" type="number" value={term} onChange={e => setTerm(+e.target.value)}/>
                <label htmlFor="floatingInputGrid">Term</label>
            </div>

            <div className="form-floating">
                <input className="form-control" type="number" value={amount} onChange={e => setAmount(+e.target.value)}/>
                <label htmlFor="floatingInputGrid">Amount</label>
            </div>

            <div className="form-floating">
                <input className="form-control" type="number" value={interest} onChange={e => setInterest(+e.target.value)}/>
                <label htmlFor="floatingInputGrid">Interest</label>
            </div>

            <button className="btn btn-outline-secondary" onClick={() => props.calculate(term,amount, interest)}>Calculate</button>
            <button className="btn btn-outline-primary" onClick={() => props.reset(setInterest, setTerm, setAmount)}>Reset</button>
        </div>
    )
}

export default Form;