import React, { Component } from 'react';
import Display from '../Jeopardy Display/displaygame'
//import our service
import JeopardyService from "../../jeopardyService";


class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {

    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      formData: {
        answer: '',
      }
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }

  handleChange = (event) => {
    const formData = { ...this.state.formData }
    // console.log(formData)
    // console.log(event.target.name)
    // console.log(event.target.value)
    formData[event.target.name] = event.target.value
    this.setState({ formData })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.data.answer === this.state.formData.answer) {
      this.setState((state, props) => ({
        score: state.score + state.data.value,
        formData: {
          answer: '',
        }
      }))
    } else {
      this.setState((state, props) => ({
        score: state.score - state.data.value,
        formData: {
          answer: '',
        }
      }))
    }
    this.getNewQuestion();

  }



  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
    
  }
  //display the results on the screen
  render() {
    console.log(this.state.data)
    console.log(this.state.data.score)
    if (!this.state.data.category) {
      return <div>Loading</div>

    }
    return (
      <Display 
        question={this.state.data.question}
        value={this.state.data.value}
        title={this.state.data.category.title}
        score={this.state.score}
        submit={this.handleSubmit}
        change={this.handleChange}
        answer={this.state.formData.answer}
      />
    );
  }
}
export default Jeopardy;