import React, {useState} from 'react';

const initialList = [
    {
        title: '',
    }
]

function Counter () {
    const [list, setList] = useState(initialList)
    const [title, setTitle] = useState("")
    const addToList = () => {
        setList([...list, {title}]);
        setTitle('');
    }
    return(
        <div>
            <input type= "text" value={title} onChange={e => setTitle(e.target.value)} />
            <button onClick={addToList}>add to list</button>
            {list.map(el => <li>{el.title}</li>)}
        </div>
    );
}

export default Counter;