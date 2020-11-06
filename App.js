import React from 'react';
import './App.css';

class DisplayQuestion extends React.Component{
  let selected = "";

  onValueChange(event){
    selected = event.target.value;
  }

  render(){
    return(
      <div>
        <label>{this.props.question}</label>
        <form>
          <div>
            <input type="radio" value="ans1"
            checked={selected === "ans1"}
            onChange={(e) => this.onValueChange(e)}/>
            {this.props.ans1}
          </div>
          <div>
            <input type="radio" value="ans2"
            checked={selected === "ans2"}
            onChange={(e) => this.onValueChange}/>
            {this.props.ans2}
          </div>
          <div>
            <input type="radio" value="ans3"
            checked={selected === "ans3"}
            onChange={(e) => this.onValueChange}/>
            {this.props.ans3}
          </div>
          <div>
            <input type="radio" value="ans4"
            checked={selected === "ans4"}
            onChange={(e) => this.onValueChange}/>
            {this.props.ans4}
          </div>
        </form>
      </div>
    );
  }
}

class App extends React.Component {
  state={
    quizQuests: [ Array(this.props.quiz.length).fill(false) ],
  }
    
  render(){
    let questions = [];
    this.props.quiz.forEach(element => {
      questions.push(
        <DisplayQuestion question={element[0]}
          ans1={element[1]}
          ans2={element[2]}
          ans3={element[3]}
          ans4={element[4]}
          cor={element[5]}/>
      )
    });
    return (
      <div>
        {questions}
      </div>
    );
  }
}

export default App;
