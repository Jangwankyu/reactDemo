import { Component } from 'react';

class Counter extends Component {
  

  /* state 초기화 방법 

      1. 생성자에서 초기화 
      2. 생성자 사용없이 객체형태로 초기화

  
  */
  // way 1. 생성자에서 초기화
  /*
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      fixedNumber:0
    };
  }
  */

  // way 2. 생성자 사용없이 객체형태로 초기화
  state = {
    number: 0,
    fixedNumber: 0,
  };
 
  render() {
    const { number, fixedNumber } = this.state;

    return (
      <div className='box'>
        <h1>{number}</h1>
        <h2>바뀌지 않는값 : {fixedNumber}</h2>

        <button
          onClick={() => {

            /*
              setState(p1, p2)
              p1 : 변경시킬 변수
              p2 : p1값 업데이트 후 특정작업을 할 callBack() 함수
             */
            this.setState(
                {number : number+1},
                ()=>{
                    console.log('호출');
                    console.log(this.state);
                }
            )

            /*
            this.setState()를 두번 호출시 값의 변화는 동일하다. 
            이때는 prevState ( 이전 state값) 을 사용하여 값을 변경해야 두번 호출한결과가 나타난다.
            
            this.setState((prevState) => {
              return {
                number: prevState.number + 1
              };
            });
            
            */
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;