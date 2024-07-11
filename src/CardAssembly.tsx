import DivComponent from "./DivComponent";
import H1Component from "./H1Componet";
import H6Component from "./H6Component";
import baseData from "./baseData"
import React from "react";






const CardAssembly:React.FC = ()=>{
  const test : string = "테스트에요 얘는 변수에요"

  return (
      <DivComponent textNode={test} className="testDivClass">
        <H1Component textNode={"이건 테스트에요"} className={"testH1Class"}/>
        <H6Component textNode="얘는 다르게 써봤어요" className="testH6Class"/>
      </DivComponent>
  )
}


export default CardAssembly


