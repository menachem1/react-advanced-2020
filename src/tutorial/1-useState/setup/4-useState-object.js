import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState();
  

  const [name, setName] = useState('peter');
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState('random message');

  const changeMessage = () => {
    // for objects
    // setPerson({...person, message: 'hello world'})
    
    setMessage('hello world')
    // setName("mendel")
    // setAge(17)
  }

  return <>
  <h3>{name}</h3>
  <h3>{age}</h3>
  <h3>{message}</h3>
  <button className='btn' onClick={changeMessage}>change message</button>
  </>;
};

export default UseStateObject;
