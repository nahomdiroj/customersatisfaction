import React from 'react'
import Question from './Question'
import {questions} from '../EngQues'
import classes from './questioncss.module.css'


function Questions() {
  return (
    <div className={classes.questions}>
      <h1>Feel free to give us your input</h1>
      {
            questions.map((questions)=>{
                console.log(questions)
             return   <Question key={questions.id} question={questions}/>
            })
      }
    </div>
  )
}

export default Questions
