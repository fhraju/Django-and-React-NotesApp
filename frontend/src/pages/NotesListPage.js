import React, {useState, useEffect} from 'react'
//import notes from '../assets/data'
import ListItems from '../components/ListItems'

const NotesListPage = () => {

  const [notes, setNotes] = useState([])
  
  useEffect(() => {
    getData()
  },[])

  let getData = async () => {
    let response = await fetch('/api/notes/')
    let data = await response.json()
    setNotes(data)
  }

  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782; Notes  </h2>
        <p className='notes-count'>{notes.length}</p>
      </div>

      <div className='notes-list'>
        {notes.map((note, index) => (
            <ListItems key={index} note={note} />))}
      </div>
    </div>
  )
}

export default NotesListPage