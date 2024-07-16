import React from "react";

interface tagInterface{
  textNode : string
  className? : string
}


const H1Component :React.FC<tagInterface>= ({className, textNode})=>{
  return(
    <h1 className={className}>{textNode}</h1>
  )
}


export default H1Component
