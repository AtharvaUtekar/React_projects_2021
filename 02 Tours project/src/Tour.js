import React, { useState } from 'react';

const Tour = ({id,image,info,price,name, removeTour}) => {  
  const [readMore,setReadMore] = useState(false);
  
  return (
    <article className="single-tour">
    <img src={image} alt={name}></img>
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p className="tour-info">{readMore ? info :info.substring(0,225)}
      <button onClick={()=>setReadMore(!readMore)} className="">{readMore?"Show less":"...Read More"}</button>
      </p>
     
      <button onClick={() => removeTour(id)} className="delete-btn"> not interested </button>
    </footer>
    </article>

  );    
};

export default Tour;
