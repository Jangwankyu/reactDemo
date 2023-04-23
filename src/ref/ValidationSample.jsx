import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {

    state ={
        title : 'CreateRef 생성방법',
        password:'',
        clicked :false,
        validated :false
    }

    handleChange = (e) => {
    this.setState({
        password : e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked : true,
            validated : this.state.password === '0000',
            password : ''
        })

        this.ref_input.focus();
    }

    /*
        createRef를 통한  ref 생성방법

        createRef_input = React.createRef();

        handelFocus()
        {
            this.createRef_input.current.focus();
        }

        input에 props 로 넣어주기
        ref={this.createRef_input}
    */

    createRef_input = React.createRef();

    handelFocus()
    {
        this.createRef_input.current.focus();
    }

    // 컴포넌트 렌더링 도중에 에러가 발생했을때 애플리케이션이 먹통이 되지 않고 오류 UI를 보여줄수 있게함.
    componentDidCatch(error, info) {
        this.setState({
                error : true
            });

        console.log({error, info});
    }


    render() {
        return (
            <>

            <div className='box' style={{height:'100px'}}>
                <input 
                    ref={(ref) => this.ref_input=ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />

                <button onClick={this.handleButtonClick}>검증하기</button>
                <br/>
                {this.state.password}
            </div>

            {this.state.title}
            
            <div className='box' style={{height:'100px'}}>
                <input 
                    ref={this.createRef_input}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />

                <button onClick={this.handleButtonClick}>검증하기</button>
                <br/>
                {this.state.password}
            </div>

            </>
        );
    }
}

export default ValidationSample;