import { InputTitleContext } from "./InputTitleContext"
import { useContext } from "react"

export default function InputTitle(){
    const {inputTitle, setInputTitle} = useContext(InputTitleContext)
    
    return (
        <input 
        type="text" 
        className="search-bar"
        value={inputTitle}
        onChange={(e)=> setInputTitle(e.target.value)}
        />
    )
}