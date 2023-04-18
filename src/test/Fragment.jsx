import React from "react";

const Fragment = () => {
  let changeName = "장완규"; // 변수 선언, {} 안에서 사용가능
  const constName = "홍길동";

  /*
    let 는 초기화 이후 변경 가능
    const 는 초기화 이후 변경 불가능 
    */
  //constName = "홍길동 변경";  // Error

  return (
    <div className="fragment">
      <div>
        <h1>
          Hi {changeName} : {constName}
        </h1>
      </div>
    </div>
  );
};

export default Fragment;
