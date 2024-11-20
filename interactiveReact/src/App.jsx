// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useDebugValue, useState } from 'react'
import './App.css'
import SearchArea from './SearchArea'
import NoteBoard from './NoteBoard'
import NoteCreation from './NoteCreation'

const notes = [
  {
    title: 'Test1',
    body: 'this is a test',
    favorite: false
  },
  {
    title: 'how does this work?',
    body: 'hopefully this works',
    favorite: false
  },
  {
    title: 'please',
    body: 'please please',
    favorite: false
  }
]

export default function App() {
  const [ searchText, setSearchText ] = useState('')
  const [ inputTitle, setInputTitle ] = useState('once')
  const [ inputBody, setInputBody ] = useState('checking2')
  const [ showFavorites, setShowFavorites ] = useState(false)
  const [ createNewNote, setCreateNewNote ] = useState(true)

  if (createNewNote) {
    setCreateNewNote(false)
    const note = [{
      title:{inputTitle},
      body:{inputBody},
      favorite:false
    }]
    
    notes.push(note)
    console.log(notes)
  }

  const filterSearch = notes.filter(note => {
    let search = searchText.toLowerCase()
    let title = note.title.toLowerCase()
    let body = note.body.toLowerCase()
    return (title.includes(search) || body.includes(search) )
  }
)
  const filterFav = filterSearch.filter(note => 
    showFavorites == true ? note.favorite : true
  )

  return (
    <>
      <NoteCreation/>
      <SearchArea
      searchText = {searchText}
      setSearchText = {setSearchText}
      />
      <NoteBoard notes={filterSearch}/>
    </>
  )
}