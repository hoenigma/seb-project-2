import React from "react";
import { Link } from "react-router-dom";
import CharacterList from "./CharacterList";

interface CharacterList{
name: string, image: string
}

function CharacterThumbnail({ name, image }:CharacterList ){
return <div className="column-is-one-fifth">
    <Link to={`/charactershow/${name}`}>
    <div className="card">
        <div className="card-header">
            <h4 className="card-header-title">{name}</h4>
        </div>
<div className="card-image">
    <figure className="image image-is-1-by-1">
        <img src={image} alt={name} />
    </figure>
</div>
    </div>
    </Link>
</div>
}

export default CharacterThumbnail