import DivComponent from "./DivComponent";
import H1Component from "./H1Componet";
import H6Component from "./H6Component";
import baseData from "./baseData"
import React from "react";






const CardComponent:React.FC = ()=>{

  return (
    <DivComponent className={baseData.cardContainer.class}>
        <DivComponent className={baseData.card.class}>
          <H1Component textNode={baseData.h1.textNode[0]}/>
          <H6Component textNode={baseData.h6.textNode[0]}/>
        </DivComponent>
      </DivComponent>
  )
}


export default CardComponent


