import React from "react"
import  ReactDOM  from "react-dom/client"
import CardAssembly from "./CardComponent";
import "./style.css"
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)


// root.render(// <DivComponent textNode={"test"} className={"testFiled"} />
// )


root.render(
  <CardAssembly/>
)