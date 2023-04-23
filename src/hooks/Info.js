import {useEffect, useState} from 'react';

const Info = () => {

    const [ name, setName ]         = useState('');
    const [ nickName, setNickName]  = useState('');

    /*
        useEffect : 렌더링 될때마다 수행
    */

/*
    useEffect( () => {
        
        alert('렌더링이 완료되었습니다. 1');
        
        //console.log('렌더링이 완료되었습니다.');
        //console.log({name, nickName });
    });
*/
    useEffect( () => {

        alert('렌더링이 완료되었습니다.');
        
        //console.log('effect');
        //console.log(name);

        return () => {
            alert('마운트 될때만 실행합니다.');
        console.log('cleanup');
        //console.log(name);
        };

    }, []);
    // 두번째 인자를 [] 빈배열을 넣을 경우 렌더링때만 실행하고 , 업데이트일경우는 실행하지 않는다.
    // 두번째 인자를 [변수] 특정값이 업데이트될 경우만 실행할경우 해당 변수를 넣어준다. 

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickName = e => {
        setNickName(e.target.value);
    };


    return (
        <div className='box'>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickName} onChange={onChangeNickName} />
            </div>
            <div>
                <div>
                    이름 : {name}
                </div>
                <div>
                    닉네임 : {nickName}
                </div>
            </div>
        </div>
    );
};

export default Info;