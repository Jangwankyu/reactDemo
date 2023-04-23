import { useState } from 'react';

const IterationSample = () => {
    const [name, setNames] = useState([
        {id :1, text : '눈사람'},
        {id :2, text : '얼음'},
        {id :3, text : '눈'},
        {id :4, text : '바람'}
    ]);

    const [inputText, setInputText] = useState('');

    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);

    const onClick = () => {
        const nextNames = name.concat(
            {
                id : nextId,
                text : inputText
            }
        )

        if(inputText !== '')
        {
            setNextId(nextId+1);
            setNames(nextNames);
            setInputText('');
        }
        else{
            alert( nextId + '문자를 입력해주세요');
        }

        // 함수형에서는 ref 사용불가능.
        //this.refInput.focus();\
        //ref={(ref) => {this.refInput=ref}}
    };

    
    const onRemove = id => {
        const nextNames = name.filter(name => name.id !== id);
        setNames(nextNames);
    };

    const nameList = name.map(name => (
        <li key={name.id} onDoubleClick={()=>onRemove(name.id)}>{name.text}</li>
    ));

    //const nameList = name.map(name => <li key={name.id}>{name.text}</li>);


    return (
        <div className="box">
            <input 
                value={inputText} 
                onChange={onChange}
            />
            
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </div>
    );
};

export default IterationSample;
