import React, {useState} from 'react';


function ToDo() {


    const [list, setList] = useState([])
    const send = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(todos => setList(todos))
    }

    return (
        <div className="input-group">
            <button onClick={send}>Send</button>
            <ul>
                {
                    list.map(el => <li key={el.id}>
                        {!el.completed && el.title}
                        {el.completed && <s>el.title</s>}
                    </li>)
                }
            </ul>
        </div>
    );
}

export default ToDo;
