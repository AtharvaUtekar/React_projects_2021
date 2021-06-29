import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,setColor] = useState('');
  const [error,setError] = useState('');
  const [list, setList] = useState(new Values('#FF5864').all(10))

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);      
    } catch (error) {
      setError(true);
    }    
  }

  return (
  <>
    <section className="container header-text">
      <div className="header-content">
        <h3  >Color generator </h3>
      </div>    
      <div className="underline"></div>  
      <div className="form-group" >
      <form onSubmit={handleSubmit}>
        <input type="text" vlaue={color} onChange={(e)=>{setColor(e.target.value)}} placeholder="#ff5864"
          className={`${error ?'error':null} form-box`
          }
        ></input>        
        <button type="submit" className="btn form-box">Generate!</button>        
      </form>
      </div>
      
    </section>
    <div className="colours-div">
    <section className="colors">
      
      { list.map((color,index) =>{
        return (<SingleColor key={index} {...color} index={index}/>);
      })} 

    </section>
    </div>
    
    </>
  );

}

export default App
