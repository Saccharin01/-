const baseData  = require("./baseDataTest.js")

const testFunc = ()=>{
   const cards = Array.isArray(baseData.h1.textNode) ? baseData.h1.textNode.length : 1
   const testArray = Array.from({length : cards}, (_,index) =>{return index+1})
  console.log(testArray)
}

testFunc()