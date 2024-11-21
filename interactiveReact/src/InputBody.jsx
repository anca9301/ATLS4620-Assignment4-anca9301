import { useContext } from "react"
import { InputBodyContext } from "./InputBodyContext"

export default function InputBody(){
    const {inputBody, setInputBody} = useContext(InputBodyContext)

    return (
        <input
        type="text"
        className="input-body"
        value={inputBody}
        placeholder="Lorem Ipsum"
        onChange={(e)=> setInputBody(e.target.value)}
        />
    )
}