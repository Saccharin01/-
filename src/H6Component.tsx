import React from "react";

interface tagInterface {
  textNode : string
  className? : string
}


const H6Component:React.FC<tagInterface> = ({textNode,className})=>{
  return(
    <h6 className={className}>{textNode}</h6>
  )
}


export default H6Component