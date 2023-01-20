import {React,useRef,useState} from 'react'
import "./useref.css"

 const UseRef = () => {
    const dataInput = useRef(null)
    const [value,setValue]= useState(null);
    function useRefHandle(){
        const data =dataInput.current.value
        setValue(data)
        
    }
  return (
    <div className='ref-container'>
        <h1>This is useRef Demo</h1>
        <p>Welcome to UseRef tutorial</p>
        <input placeholder='Input some values' ref={dataInput} className="input"/>
        <p>{value}</p>
        <button onClick={useRefHandle} className="btn2">Click Here</button>
        
    </div>
  )
}

export default UseRef;
