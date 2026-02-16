import { useRef } from "react"


function FocusInput() {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const handleClick = () =>{
        inputRef.current.focus()
    }
  return (
    <div>
        <input type="text" ref={inputRef} placeholder="enter your name..." />
        <button onClick={handleClick}>Focus input</button>
        
    </div>
  )
}

export default FocusInput