import { useContext } from "react"
import { CreateNewNoteContext } from "./CreateNewNoteContext"

export default function SaveButton() {
    const {createNewNote} = useContext(CreateNewNoteContext)

    return(
        <button
        className="saveButton"
        onClick={createNewNote}>
            Save
        </button>
    )
}