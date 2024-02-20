import React,{useState} from 'react';

const UseStateExample = () => {
    // Here inside the array two fields are define and use useState hook
    // myName is the one variable
    // setMyName is the function
    const [myName,setMyName]= useState('Sovit');
    const changeName = () => {
        // val='hello user';
        // console.log(val);
        setMyName('welcome sovit');
    }

  return (
    <div>
        <h1>{ myName }</h1>
        <button className='btn' onClick={ changeName }>click me</button>
    </div>
  )
}

export default UseStateExample