import React from 'react'
import Jeopardy from '../Jeopardy/Jeopardy'

function Display (props) {
    return (
        <div>
            <div>
        <div>
          <label>Question: </label>
          <p>{props.question}</p>
        </div>
        <div>
          <label>
            Value: {props.value}
          </label>
        </div>
        <div>
          <label>Category: </label>
          {props.title}
        </div>
        <div>
          <label>Score: {props.score}</label>
        </div>

        <div className='Contact'>
          <form onSubmit={props.submit}>
            <div>
              <label htmlFor='answer'>Answer</label>
              <input
                type='text'
                name='answer'
                value={props.answer}
                onChange={props.change}
              />
            </div>

            <button>Submit Answer</button> <br />
          </form>
        </div>
      </div>
        </div>
    )
}

export default Display