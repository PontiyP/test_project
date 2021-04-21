import React, {useState} from 'react';
import CreateCard from "./CreateCard";
import EditCard from "./EditCard";


function Card() {

    const [toggle, setToggle] = useState(false);
    const toggleButton = () => {
        setToggle(!toggle)
    }
    const [editForm, setEditForm] = useState(false);
    const toggleEditForm = () => {
        setEditForm(!editForm)
    }
    const [editCard, setEditCard] = useState([''])

    const [list, setList] = useState([])
    const getList = () => {
        fetch('https://nazarov-kanban-server.herokuapp.com/card')
            .then(response => response.json())
            .then(cards => setList(cards))
    }
    const getCard = (_id) => {
        fetch('https://nazarov-kanban-server.herokuapp.com/card/' + _id)
            .then(response => response.json())
            .then(card => setEditCard(card))
            .then(()=>{toggleEditForm()})
    }
    const del = (_id) => {
        alert("Are you sure, you want to delete this card?")
        fetch('https://nazarov-kanban-server.herokuapp.com/card/' + _id, {method: 'DELETE'})
            .then(getList);
    }

    return (
        <div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created at</th>
                    <th scope="col">Description</th>
                    <td>
                        {/*'Add card'/'Cancel' button*/}
                        <button className="btn btn-outline-primary" onClick={() => {
                            toggleButton()
                        }}>{!toggle ? <img src="plus.svg"/> : <img src="x.svg"/>}</button>
                    </td>
                    <td scope="col">
                        {/*Reload button*/}
                        <button className="btn btn-outline-primary" onClick={getList}><img src="arrow-clockwise.svg"/>
                        </button>
                    </td>
                </tr>
                </thead>
                <tbody>
                {
                    list.map(el => <tr key={el._id}>
                        <td>{el.name}</td>
                        <td>{el.priority}</td>
                        <td>{el.status}</td>
                        <td>{el.createdAt}</td>
                        <td>{el.description}</td>
                        <td>
                            {/*Edit button*/}
                            <button type="button" className="btn btn-outline-success" onClick={() =>
                                getCard(el._id)
                            }><img src="pencil.svg"/>
                            </button>
                        </td>
                        <td>
                            {/*Delete button*/}
                            <button type="button" className="btn btn-outline-danger" onClick={() => del(el._id)}>
                                <img src="trash.svg"/></button>
                        </td>
                    </tr>)
                }

                </tbody>
            </table>
            <>{toggle && <CreateCard toggleButton={toggleButton} getList={getList}/>}</>
            <>{editForm && <EditCard toggleEditForm = {toggleEditForm} editCard = {editCard} getList = {getList}/>}</>
        </div>
    );
}

export default Card;
