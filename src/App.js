import React, {Component} from "react";
import "./App.css";
import Fragment from "./test/Fragment";
import Counter from "./test/Counter";
import Say from "./test/Say";
import EventPractice from "./test/EventPractice";
import IterationSample from "./test/IterationSample";

import ValidationSample from "./ref/ValidationSample";
import ScrollBox from "./ref/ScrollBox";

import Info from "./hooks/Info";

class App extends Component {

  state = {
    visible: false
  };

  handleButtonClick = () => {
    this.setState(
      { visible :  !this.state.visible},
      () => { alert('visible : ' + this.state.visible)}
    )
}


  render()
  {

    // 아래의 선언은 변수명을 그대로 쓰고 싶을경우 선언
    // 선언을 하지 않을 경우 모든변수에 this.state. 을 붙여야한다.
    const { visible } = this.state;

     

    return (
      <>
        <div>
          <Fragment name={undefined} check='isRequired'>차일드</Fragment>
        </div>

        <div>
          <Counter/>
        </div>

        <div>
          <Say/>
        </div>

        <div>
          <EventPractice/>
        </div>

        <div>
          <ValidationSample/>
        </div>

        <div>
        <button onClick={() => this.ScrollBox.scrollToBottom()}> 맨 아래로</button>
          <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
        </div>

        <div>
          <IterationSample/>
        </div>

        <div>
        <button onClick={this.handleButtonClick}> {visible ? '숨기기' : '보이기'}</button>
        <hr />
        {this.state.visible && <Info/>}  

        
          
        </div>
      </>
    );
  }
}
export default App;
