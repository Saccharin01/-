import React from "react";

interface tagInterface{
  textNode : string
  className? : string
}


const H1Component :React.FC<tagInterface>= ({textNode, className})=>{
  return(
    <h1 className={className}>{textNode}</h1>
  )
}


export default H1Component
