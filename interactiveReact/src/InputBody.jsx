import { useContext } from "react"
import { InputBodyContext } from "./InputBodyContext"

export default function InputBody(){
    const {inputBody, setInputBody} = useContext(InputBodyContext)

    return (
        <input
        type="text"
        className="note-input-body"
        value={inputBody}
        onChange={(e)=> setInputBody(e.target.value)}
        />
    )
}