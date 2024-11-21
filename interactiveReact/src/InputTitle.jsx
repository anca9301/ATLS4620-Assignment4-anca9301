import { InputTitleContext } from "./InputTitleContext"
import { useContext } from "react"

export default function InputTitle(){
    const {inputTitle, setInputTitle} = useContext(InputTitleContext)
    
    return (
        <input 
        type="text" 
        className="input-title"
        value={inputTitle}
        placeholder="Title"
        onChange={(e)=> setInputTitle(e.target.value)}
        />
    )
}