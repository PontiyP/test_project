import React, {useState, useEffect} from "react";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

function EditCard(props) {

    const [name, setName] = useState('');
    const [priority, setPriority] = useState(0);
    const [status, setStatus] = useState('');

    useEffect(()=>{
        setName(props.editCard.name);
        setPriority(props.editCard.priority);
        setStatus(props.editCard.status);
        console.log(props)
    },[])

    const edit = () => {
        fetch('https://nazarov-kanban-server.herokuapp.com/card/' + props.editCard._id, {
            method: 'PATCH',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({
                name,
                priority,
                status,
                description: 'no description'
            })
        })
            .then(response => response.json())
            .then(() => {
                props.getList()
            })
            .then(() => {
                props.toggleEditForm()
            })
        setName('')
        setPriority(0)
        setStatus("")


    }

    return (
        <div id='modalWrapper'>
            <table id="modal" className="table table-striped">
                <tr>
                <td>
                    <input className="form-control" type="text" value={name} onChange={e => setName(e.target.value)}/>
                    <label htmlFor="floatingInputGrid">Name</label>
                </td>

                <td>
                    <input className="form-control" type="number" value={priority}
                           onChange={e => setPriority(+e.target.value)}/>
                    <label htmlFor="floatingInputGrid">Priority</label>
                </td>

                <td>
                    <input className="form-control" type="text" value={status}
                           onChange={e => setStatus(e.target.value)}/>
                    <label htmlFor="floatingInputGrid">Status</label>
                </td>
                </tr>
            </table>
            {/*Edit button*/}
            <div className="align-right" >
                <button className="btn btn-outline-secondary" onClick={() => {
                    edit()
                }}>edit
                </button>
                <button className="btn btn-outline-secondary" onClick={() => props.toggleEditForm()}>Cancel</button>
            </div>
        </div>
    )
}

export default EditCard;