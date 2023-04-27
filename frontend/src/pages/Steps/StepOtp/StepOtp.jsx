import React from 'react'

const StepOtp = ({ onNext }) => {
  console.log('hello')
  return (
    <>
      <div>Otp Component</div>
      <button onClick={onNext}>Lets Move</button>
    </>
  )
}

export default StepOtp
