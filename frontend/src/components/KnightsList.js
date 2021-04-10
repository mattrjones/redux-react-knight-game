import React, { useState, useEffect} from 'react';
import axios from 'axios';
import KnightCreator from './KnightCreator';
import Knight from './Knight'
import { connect } from "react-redux"
import { addKnightRedux, wipeStore, deleteKnight } from "../redux/actions"
import knightReducer from '../redux/reducers/knightReducer';

const mapStateToProps = state => {
    const { knights } = state
    return { knights }
}

const mapDispatchToProps = dispatch => {
    return {
        addKnightRedux: knightToAdd => dispatch(addKnightRedux(knightToAdd)),
        wipeStore: () => dispatch(wipeStore()),
        deleteKnight: knightToRemove => dispatch(deleteKnight(knightToRemove))
    }
}

function KnightsList(props) {

    useEffect(() => {
        props.wipeStore()
        axios.get('/api/v1/knights')
            .then(res => res.data.map(knight => props.addKnightRedux(knight)))
    }, []);


    const addKnight = knight => {
        const qs = require('qs');

        axios.post('api/v1/knights', qs.stringify(
            {
                knight:{
                    name: knight.name,
                    trait: knight.trait,
                    attack: knight.attack,
                    defense: knight.defense,
                    level: knight.level
                }
            }))
            .then(res=>(console.log(res)))
            .catch(error => console.log(error))
            
        props.addKnightRedux(knight)
    }

    const deleteKnight = id => {
        axios.delete( '/api/v1/knights/' + id)
        .then(props.deleteKnight(id))
            .catch(error => console.log(error))
    }

    const showKnights = () => {  
        return props.knights.map((knight) => (
             <Knight knight={knight} deleteKnight={deleteKnight}/>
        ))
    }

    return(
        <div>
      <div>
        <KnightCreator addKnight={addKnight}/>
      </div>
      <div className="KnightsList">
        {showKnights()}
      </div>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(KnightsList);