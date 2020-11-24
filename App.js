import React from 'react';
import './App.css';


class DisplayQuestion extends React.Component{
  render(){
    return(
      <div>
        <label>{this.props.question}</label>
        <form>
          <div>
            <input type="radio" value="ans1"
            checked={() => this.props.selectionChecker(this.props.ans1, this.props.questionNumber)}
            onChange={() => this.props.answerChanger(this.props.ans1, this.props.questionNumber)}/>
            {this.props.ans1}
          </div>
          <div>
            <input type="radio" value="ans2"
            checked={() => this.props.selectionChecker(this.props.ans2, this.props.questionNumber)}
            onChange={() => this.props.answerChanger(this.props.ans2, this.props.questionNumber)}/>
            {this.props.ans2}
          </div>
          <div>
            <input type="radio" value="ans3"
            checked={() => this.props.selectionChecker(this.props.ans3, this.props.questionNumber)}
            onChange={() => this.props.answerChanger(this.props.ans3, this.props.questionNumber)}/>
            {this.props.ans3}
          </div>
          <div>
            <input type="radio" value="ans4"
            checked={() => this.props.selectionChecker(this.props.ans4, this.props.questionNumber)}
            onChange={() => this.props.answerChanger(this.props.ans4, this.props.questionNumber)}/>
            {this.props.ans4}
          </div>
        </form>
      </div>
    );
  }
}

class App extends React.Component {
  state={
    chosenAnswers: [ Array(this.props.quiz.length).fill(false) ],
  }

  changeAnswer(newAnswer, questionNumber){
    let modifiedArray = this.state.chosenAnswers;
    modifiedArray[questionNumber] = newAnswer;
    this.setState({
      chosenAnswers: modifiedArray
    });
    console.log("ans change");
  }
  
  checkIfSelected(answerToCheck, questionNumber){
    return (answerToCheck === this.state.chosenAnswers[questionNumber]);
  }
    
  render(){
    let questions = [];
    let questionNumber = -1;
    this.props.quiz.forEach(element => {
      questionNumber++;
      questions.push(
        <DisplayQuestion questionNumber={questionNumber}
          question={element[0]}
          ans1={element[1]}
          ans2={element[2]}
          ans3={element[3]}
          ans4={element[4]}
          correct={element[5]}
          answerChanger={(i, j) => this.checkIfSelected(i, j)}
          selectionChecker={(i, j) => this.changeAnswer(i, j)}/>
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
