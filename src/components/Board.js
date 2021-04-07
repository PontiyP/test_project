import React from "react";

function Board (props) {
    console.log(props)
    return (
        <div className="container">
            {props.data.map(el => (
            <div key = {el.id} className="row row-cols-3">
                <div className="col">{el.term}</div>
                <div className="col">{el.amount}</div>
                <div className="col">{el.interest}</div>
            </div>
            ))
            }
        </div>
    )
}

export default Board;