import React from 'react'
import { Link } from 'react-router-dom'

export default function Knight(props){

    return(
        <div className="Knight" key={props.id}>
            <h4>{props.knight.name}, the {props.knight.trait}</h4>
            <p>Atk: {props.knight.attack}</p>
            <p>Def: {props.knight.defense}</p>
            <p>Lvl: {props.knight.level}</p>

            <button onClick={() => props.deleteKnight(props.knight.id)}>Delete</button><br />
            <Link to={`/knights/${props.knight.id}/adventure`}>Adventure With {props.knight.name}</Link>
        </div>
    )

}