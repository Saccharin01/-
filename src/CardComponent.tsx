import DivComponent from "./DivComponent";
import H1Component from "./H1Componet";
import H6Component from "./H6Component";
import baseData from "./baseData"
import React from "react";






const CardComponent:React.FC = ()=>{
const length = Array.isArray(baseData.card.textNode) ? baseData.card.textNode.length : 1
  return (

    <DivComponent className={baseData.cardContainer.class}>

        <DivComponent className={baseData.card.class}>

        </DivComponent>
      </DivComponent>
  )
}


export default CardComponent


