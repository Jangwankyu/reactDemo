import React from "react";
import { PropTypes } from "prop-types";

const Fragment = (props) => {
  let changeName = "장완규"; // 변수 선언, {} 안에서 사용가능

  /*
    let 는 초기화 이후 변경 가능
    const 는 초기화 이후 변경 불가능 

    //constName = "홍길동 변경";  // Error
  */
  const constName = "홍길동";

  /*
    비구조화 할당 
    props.변수  => 변수 로 변경가능.
    함수형 콤포넌트 선언부에서도 사용가능 
    -> const Fragment = ({name, children}) => {
  */
  const { name, children, check } = props;

  // 부모에서 props 변수가 설정되지 않을 경우 기본으로 대체됨
  // <Fragment name={undefined}/> or <Fragment/>
  Fragment.defaultProps = {
    name: '기본이름'
  };

  /*
    propTypes 를 통한 검증
  */
  Fragment.prototype = {
    name: PropTypes.string,
    check : PropTypes.string.isRequired
  };

  return (
    <>
      <div className='box'>
        <div>
          <h1>
            Hi {changeName} : {constName} : {name} : {children}
          </h1>
          <h1>{check} 요구사항 확인!!</h1> 
        </div>
      </div>
    </>
  );
};

export default Fragment;
