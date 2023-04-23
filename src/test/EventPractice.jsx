import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };

  /*

  메서드 바인딩은 생성자를 통해서 하는게 정석이나 매서드가 추가될때마다 생성자를 
  변경해야 하는 불편함때문에 아래와 같이 화살표 함수 형태로 작성한다
  

  constructor(props)
  {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
*/
  handleChange = (e) => {
    this.setState({

      // e.target.name 은 이벤트가 발생한 Dom 의 name 속성을 가리킨다.
      // 여러개의 인풋을 사용할때 각각의 메서드를 만들지 않고 이 속성값을 이용한다. 
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    alert(this.state.username + ' : ' + this.state.message);

    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (e) => {
    if(e.key === 'Enter')
    {
        this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>

        <input
          type="text"
          name="username"
          placeholder="이름"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />

        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
