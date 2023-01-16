import {React,useState} from 'react'
import "./home.css"

const UseState = () => {
  
    const [count,setCount]=useState(0);
    function increaseHandle(){
      setCount(count+1);
    }
    function decreaseHandle(){
        if(count>0)
         setCount(count -1);
      }
      function reset(){
        setCount(0)
      }
  return (
    <div className='container'>
        <div className='card'>
        <h1>Welcome to HOOk UseState</h1>
        <p>{count}</p>
        <button className='btn'onClick={increaseHandle}>Increase</button>
        <button className='btn' onClick={decreaseHandle}>Decrease</button>
        <button className='btn' onClick={reset}>Reset</button>
        </div>
    </div>
  )
}
export default UseState;
