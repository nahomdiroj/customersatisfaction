import React from 'react'
import Question from './Question'
import {questions} from '../EngQues'
import classes from './questioncss.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function Questions() {
  return (
      <div className=' container'>
           
      <h1>Feel free to give us your input</h1>
      {
            questions.map((questions)=>{
                console.log(questions)
             return   <Question key={questions.id} question={questions}/>
            })
      }
       <textarea cols="50" rows="5">

        </textarea>
      </div>

  )
}

export default Questions
