import React, { useState } from 'react' 

export default function KnightCreator(props) {

    const initialFormState = {
        name:'',
        trait:'',
        attack:'',
        defense:'',
        level:'',
    }

    const [knight, setKnight] = useState(initialFormState)
    
    const handleInputChange = event => {
        const { name, value } = event.target 
        setKnight({...knight, [name]: value})
    };

    return (
        <form className="KnightForm" onSubmit={event => {
            event.preventDefault()
            if (!knight.name || !knight.trait || !knight.attack || !knight.defense || !knight.level) return;
            props.addKnight(knight)
            setKnight(initialFormState)
        }}>
            <label>Name: </label>
            <input type="text" name="name" value={knight.name} onChange={handleInputChange}/>
            <label>Trait: </label>
            <input type="text" name="trait" value={knight.trait} onChange={handleInputChange}/>
            <label>Attack: </label>
            <input type="text" name="attack" value={knight.attack} onChange={handleInputChange}/>
            <label>Defense: </label>
            <input type="text" name="defense" value={knight.defense} onChange={handleInputChange}/>
            <label>Level: </label>
            <input type="text" name="level" value={knight.level} onChange={handleInputChange}/>
            <button type="submit">Create Knight</button>
        </form>
    )
}