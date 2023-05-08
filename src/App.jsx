// import { useState } from 'react'
import OtpVerfication from './components/OtpVerfication'
import './App.css'

function App() {
  // const [number, setNumber] = useState(0)
  const HandleNumberChange=()=>{
      var number=prompt("Enter new number");
      console.log(number)
      while(isNaN(number) || number.length!=10){
        number = prompt("Enter your number only:");
      }

      if(!isNaN(number) && number.length===10){
        alert("successful !!!!")
      }

  }

  const HandleResendOtp=()=>{
      alert("We have send the OTP again please check !!!!")
  }

  const HandleVerify=()=>{
    alert("verified")
  }

  return (
    <>
    <div className='main'>
      <header >
        <p>Phone Verification</p>
        </header>
        
      <div className='form'>
        <div className='second_header'><p>Enter the OTP you recieved on 89206-6XXXX</p></div>
      <OtpVerfication/>
      
      <div className='link_grp'>
          <span onClick={HandleNumberChange}> Change Number</span>
          <span onClick={HandleResendOtp}>Resend OTP</span>
      </div>
      <button onClick={HandleVerify}>Verify Phone Number</button>
      </div>
      </div>
    </>
  )
}

export default App
