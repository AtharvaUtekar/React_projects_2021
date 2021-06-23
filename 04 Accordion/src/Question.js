import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title , info} ) => {

  const [showinfo, setShowinfo] = useState(false);
  
  const button_click =() =>{
    setShowinfo(!showinfo);
  };

  return (<section className="question">
    <header>
      <h4>{title}</h4>
      <button className="btn" onClick={button_click} >
        {showinfo ? <AiOutlineMinus/>: <AiOutlinePlus/>}
      </button>
    </header>
    <div>
      {showinfo && <p>{info}</p>}
    </div>
  
  </section>
  );
};

export default Question;
