import React from "react";
import { Link } from "react-router-dom";


export const Card = (props) => {



return (


        <div className="card" style={{width: "18rem "}}>
            <div className="card-body">
                <img src="..." className="card-img-top" alt="..." />
                <h5 className ="card-title">{props.name}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
            </div>
            );



};
            











