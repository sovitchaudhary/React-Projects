import React,{useState} from 'react';

const UseStateExample = () => {
    // Here inside the array two fields are define and use useState hook
    // myName is the one variable
    // setMyName is the function
    const [myName,setMyName]= useState('Sovit');
    const changeName = () => {
        // val='hello user';
        // console.log(val);

        // onetime change value
        // setMyName('welcome sovit');

        //toggle 
        // if(myName === 'Sovit'){
        //   setMyName('Hello! Welcome Sovit');
        // }else{
        //   setMyName('Sovit');
        // }

        //using ternary operator

        let val= myName;
        (val==='Sovit')?setMyName('Hello! Welcome Sovit'):setMyName('Sovit');
    }

  return (
    <div>
        <h1>{ myName }</h1>
        <button className='btn' onClick={ changeName }>click me</button>
    </div>
  )
}

export default UseStateExample