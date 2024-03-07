import React from "react";
import { Link } from "react-router-dom";

function CharacterThumbnail({ name, image }){
return <div className="column is-2">
    <Link to={`/charactershow/${name}`}>
    <div className="card">
        <div className="card-header">
            <h4 className="card-header-title">{name}</h4>
        </div>
<div className="card-image">
    <figure className="card-image">
        <img src={image} alt={name} />
    </figure>
</div>
    </div>
    </Link>
</div>
}

export default CharacterThumbnail