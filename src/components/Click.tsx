import { useRef } from "react"

function Click() {
    const countRef = useRef<number>(0)
    
    const countClick = () =>{
        console.log(countRef.current)
        countRef.current = countRef.current + 1 
        alert(`Button click ${countRef.current} times`)
    }
  return (
    <div>
        <button onClick={countClick}>Click me</button>
    </div>
  )
}

export default Click