const appender = (parent : string, children: string)=>{
  const container = document.querySelectorAll(`.${parent}`)
  container.forEach((element)=>{
    element.innerHTML = children
  })
}

export default appender