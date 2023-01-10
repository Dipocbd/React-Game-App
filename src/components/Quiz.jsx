import React, { useEffect, useState } from 'react'

const Quiz = ({data,setTimeout, first, setFirst}) => {


  const [question, setQuestion] = useState(null);

  useEffect(()=>{
    setQuestion(data[first - 1]);
  },[data, first]);

  return (
    <div className='quiz'>
        <div className='question'>{question?.question}</div>
        <div className='answers'>
          {
            question?.answers.map((a)=>(
            <div className='answer'>{a.text}</div>
             ))
          }

        </div>
    </div>
  )
}

export default Quiz