import React, { useEffect, useState } from 'react'

const Quiz = ({data,setTimeout, first, setFirst}) => {


  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");


  useEffect(()=>{
    setQuestion(data[first - 1]);
  },[data, first]);


  const handleClick = (a) =>{
    setSelectedAnswer(a);
    setClassName=("answer active");
    setTimeOut
  }

  return (
    <div className='quiz'>
        <div className='question'>{question?.question}</div>
        <div className='answers'>
          {
            question?.answers.map((a)=>(
            <div className={selectedAnswer === a ? className: "answer"}  onClick={()=>handleClick(a)}>{a.text}</div>
             ))
          }

        </div>
    </div>
  )
}

export default Quiz