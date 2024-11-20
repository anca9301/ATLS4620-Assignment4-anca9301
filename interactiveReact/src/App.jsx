import { useState } from "react";
import "./App.css";
import SearchArea from "./SearchArea";
import NoteBoard from "./NoteBoard";
import NoteCreation from "./NoteCreation";
import { SearchTextContext } from "./SearchTextContext";
import { InputBodyContext } from "./InputBodyContext";
import { InputTitleContext } from "./InputTitleContext";
import { CreateNewNoteContext } from "./CreateNewNoteContext";

const notes = [
  {
    title: "Starting Note",
    body: "Hello. This is just an example.",
    favorite: false,
  },
]

export default function App() {
  const [searchText, setSearchText] = useState("")
  const [inputTitle, setInputTitle] = useState("")
  const [inputBody, setInputBody] = useState("")

  const filterSearch = notes.filter((note) => {
    let search = searchText.toLowerCase()
    let title = note.title.toLowerCase()
    let body = note.body.toLowerCase()
    return title.includes(search) || body.includes(search)
  })

  function createNewNote() {
    const note = {
      title: inputTitle,
      body: inputBody,
      favorite: false,
    }

    notes.push(note)

    setInputTitle("")
    setInputBody("")
  }

  return (
    <>
      <InputTitleContext.Provider value={{ inputTitle, setInputTitle }}>
        <InputBodyContext.Provider value={{ inputBody, setInputBody }}>
          <CreateNewNoteContext.Provider value={{ createNewNote }}>
            <NoteCreation />
          </CreateNewNoteContext.Provider>
        </InputBodyContext.Provider>
      </InputTitleContext.Provider>

      <SearchTextContext.Provider value={{ searchText, setSearchText }}>
        <SearchArea />
      </SearchTextContext.Provider>
      <NoteBoard notes={filterSearch} />
    </>
  )
}
