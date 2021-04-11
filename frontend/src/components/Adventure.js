import axios from 'axios';
import {useState, useEffect } from 'react'
import EncounterChooser from './EncounterChooser';
import { connect } from "react-redux"
import knightReducer from '../redux/reducers/knightReducer';
import { addKnightRedux, wipeStore, deleteKnight, addQuestion } from "../redux/actions"

const mapStateToProps = state => {
    const { knights, questions } = state
    return { knights, questions }
}

const mapDispatchToProps = dispatch => {
    return {
        addKnightRedux: knightToAdd => dispatch(addKnightRedux(knightToAdd)),
        wipeStore: () => dispatch(wipeStore()),
        deleteKnight: knightToRemove => dispatch(deleteKnight(knightToRemove)),
        addQuestion: questionToAdd => dispatch(addQuestion(questionToAdd))
    }
}

function Adventure(props) {

    const id = parseInt(props.match.params.id)

    const [success, setSuccess] = useState(false)
    
    const foundKnight = props.knights.find(knight => knight.id === id)

    const randomQuestion = () => {
        const id = Math.floor(Math.random() * props.questions.length)

        return id
    }

    let currentQuestion = props.questions.find(question => question.id === randomQuestion())

    useEffect(() => {
        props.wipeStore()
        axios.get('/api/v1/questions')
            .then(res => res.data.map(question => props.addQuestion(question)))
    }, []);

    useEffect(() => {
        props.wipeStore()
        axios.get('/api/v1/knights')
            .then(res => res.data.map(knight => props.addKnightRedux(knight)))
    }, []);


    const levelUp = () => {

        setSuccess(true)

        const oldKnight = props.knights.find(knight => knight.id === id)

        axios.put( 'http://localhost:3001/api/v1/knights/' + id, {
            knight: {
                name: oldKnight.name,
                trait: oldKnight.trait,
                attack: oldKnight.attack,
                defense: oldKnight.defense,
                level: oldKnight.level + 1
            }
        })
        .then(response => {
            const knightsList = props.knights;
            const isKnight = (element) => element === id
            knightsList[knightsList.findIndex(isKnight)] = {oldKnight}
            addKnightRedux(knightsList)
        })
        .catch(error => console.log(error));

        props.wipeStore()

        axios.get('/api/v1/knights')
            .then(res => res.data.map(knight => props.addKnightRedux(knight)))
    }

    const createEncounter = () => {

        const encounterId = Math.floor(Math.random() * 2) + 1;
        return encounterId

    }

    const handleQuestionClick = (event) => {
        setAnswered(true) 
        event.target.value === currentQuestion.correct_answer ? levelUp() : wrongAnswer();
    }

    const wrongAnswer = () => {
        setSuccess(false)
    }

    const readQuestion = () => {
        return <div className="Question">
            <h3>{currentQuestion.question_text}</h3>

            <button onClick={handleQuestionClick} value={currentQuestion.answer_one}>{currentQuestion.answer_one}</button>
            <button onClick={handleQuestionClick} value={currentQuestion.answer_two}>{currentQuestion.answer_two}</button>
            <button onClick={handleQuestionClick} value={currentQuestion.answer_three}>{currentQuestion.answer_three}</button>
            <button onClick={handleQuestionClick} value={currentQuestion.answer_four}>{currentQuestion.answer_four}</button>
        </div>
    }

    const handleAnswer = () => {
        return <div>
            {success ? "You did it!" : "Aww, better luck next time."}<br/>
            <button onClick={resetQuest}>Next Quest</button>
        </div>
    }

    const resetQuest = () => {
        setAnswered(false)
        currentQuestion = props.questions.find(question => question.id === randomQuestion())
    }

    const [encounterId] = useState(createEncounter())
    const [answered, setAnswered] = useState(false)

    return (

        <div className="Adventure">

                <h2>You're adventuring with {foundKnight ? foundKnight.name : "your knight"}!</h2>

                {answered ? null : <EncounterChooser id={encounterId} />}
                
                <div>{answered ? handleAnswer() : currentQuestion ? readQuestion() : null}</div>

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Adventure)