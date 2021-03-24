import App from './App';
import React from "react";

function Board () {
    return (
        <div className="container">
            <div className="row row-cols-4">
                <div className="col"><input className="form-control me-2"  placeholder="new item" aria-label="Search"/></div>
                <div className="col">.col-6 .col-md-4</div>
                <div className="col">.col-6 .col-md-4</div>
                <div className="col">.col-6 .col-md-4</div>
            </div>
        </div>
    )
}

export default Board