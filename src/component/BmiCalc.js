import {React,useRef,useState} from 'react';
import "./bmi.css"


const BmiCalc = () => {
    const heightData = useRef(0);
    const weightData = useRef(0);
    const [bmiCount,setBmiCount]= useState(0);

    function bmiHandle(){
   
        const data = heightData.current.value;
        const data2 = weightData.current.value;
        const bmi=(data2/( data * 2)).toFixed(2)

        if(bmi<18.5){
            setBmiCount(bmi + " You are under weight rang" )
        }
        else if(bmi>18.5 && bmi<24.9)(
            setBmiCount(bmi +" You are healthy weight rang")
        )
        else if(bmi>25.0 && bmi<29.9)(
            setBmiCount(bmi +" You are Over weight rang")
        )
        else (
            setBmiCount(bmi +" Hey Teddy you are obese")
        )
        
       
        
    
        
    }
    

  return (
    <div>
    <div className='calc-container'>
        <h3>BMI Calculater</h3>
        <input placeholder="Input Height in cm: "ref={heightData} className="bmi-input1"/>
        <input placeholder='Input Weight in Kg: 'ref={weightData} className="bmi-input2"/>
        <p>{bmiCount}</p>
        <button onClick={bmiHandle} className="btn3">Calculate BMI</button>
       
    </div>
    </div>
  )
}



export default BmiCalc;
