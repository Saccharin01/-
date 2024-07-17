import React from "react"
import DivComponent from "./DivComponent";
import H1Component from "./H1Componet";
import H6Component from "./H6Component";
import baseData from "./baseData";


const CardElement : React.FC = ()=>{
  const cards = Array.isArray(baseData.h1.textNode) ? baseData.h1.textNode.length : 1;

 
  return (
    <DivComponent className={baseData.card.class}>
      {Array.from({length : cards})}
    </DivComponent>
  )
} 


export default CardElement

