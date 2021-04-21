import React, {useState} from "react";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

function CreateCard(props) {

    const [name, setName] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');

    const newCard = (name, priority, status) => {
        fetch('https://nazarov-kanban-server.herokuapp.com/card', {
            method: 'POST',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({
                name,
                priority,
                status,
                description: 'no description'
            })
        })
            .then(response => response.json())
            .then(()=>{props.getList()})
            .then(()=>{props.toggleButton()})
        setName('')
        setPriority('')
        setStatus("")

    }

    return (
        <table className="table table-striped">
            <td>
                <input className="form-control" type="text" value={name} onChange={e => setName(e.target.value)}/>
                <label htmlFor="floatingInputGrid">Name</label>
            </td>

            <td>
                <input className="form-control" type="number" value={priority}
                       onChange={e => setPriority(e.target.value)}/>
                <label htmlFor="floatingInputGrid">Priority</label>
            </td>

            <td>
                <input className="form-control" type="text" value={status} onChange={e => setStatus(e.target.value)}/>
                <label htmlFor="floatingInputGrid">Status</label>
            </td>
            <button className="btn btn-outline-secondary" onClick={() => {
                newCard(name, priority, status)
            }}>Create new card
            </button>

        </table>
    )
}

export default CreateCard;