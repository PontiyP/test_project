import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Board from "./components/Board";
import Form from "./Form";

const initialSpread = [{
  id: uuidv4(),
  amount: 0,
  interest: 0,
  term: 0,
}]

function App() {
  const [list, setList] = useState([])

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

      for(let i = 0; i < term; i++){
          data.push({
              id: uuidv4(),
              amount: amount - interest * (i + 1),
              interest: interest,
              term: i+1,
          })
      }
      setSpread(data);
  };

  const send = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(todos => setList(todos))
  }

  return (
    <div className="input-group">
        <Form calculate={calculate} reset={reset}/>
        <Board data={spread}/>
        <button onClick={send}>Send</button>
        <ul>
            {
                list.map(el => <li key = {el.id}>
                    {!el.completed && el.title}
                    {el.completed && <s>el.title</s>}
                </li> )
            }
        </ul>
    </div>
  );
}

export default App;
