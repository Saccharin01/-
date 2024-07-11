

interface tagInterface {
  textNode : string
  className? : string
  children? : React.ReactNode
}


const DivComponent : React.FC<tagInterface> = ({textNode, className, children }) => {
  return (
    <div className = {className}>
      {textNode}
      {children}
    </div>
  )
}


export default DivComponent