import React, { useEffect, useState } from 'react'

const StopWatch = () => {
    const[isRunning,setIsRunning]=useState(false);
    const [time,setTime]=useState(0);
    const[validId,setValidId]=useState(0);
    function handleRestart(){
      setTime(0);
      setIsRunning(false);
    }

    function handleStart(){
       setIsRunning((pre)=>!pre);

    }
    useEffect(()=>{
        if(isRunning){

        const id=setInterval(()=>{
         setTime((time)=>time+1)
        },1000);
        setValidId(id);
    }
  else{
    clearInterval(validId);
  }
    return()=>clearInterval(validId)
    })
  return (
    <div>
      <h1>StopWatch</h1>
      <h1>{time} </h1>
      <button onClick={handleStart}>{isRunning ? 'Stop':'Start'}</button>
      <button onClick={handleRestart}>Reset</button>
    </div>
  )
}

export default StopWatch
