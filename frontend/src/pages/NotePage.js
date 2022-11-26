import React, {useState, useEffect} from 'react'
import { useParams, useNavigate,  } from 'react-router-dom'
//import notes from '../assets/data.js'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = () => {
  let paramid = useParams().id
  let navigate = useNavigate()
  //let note = notes.find(note => note.id === Number(paramid))
  let [note, setNote] = useState([])

  useEffect(() => {

    let getNote = async () => {
      if (paramid === 'new') return

      let response = await fetch(`/api/notes/${paramid}`)
      let data = await response.json()
      setNote(data)
    }

    getNote()
  },[paramid])

  let createNote = async () => {
    fetch (`/api/notes/${paramid}`, {
      method:"POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  let updateNote = async () => {
    fetch (`/api/notes/${paramid}/update`, {
      method:"PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  let deleteNote = async () => {
    fetch(`/api/notes/${paramid}/delete`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
    navigate('/')
  }

  let handleSubmit = () => {
    if (paramid !== 'new' && note.body === '') {
      deleteNote()
    } else if (paramid !== 'new') {
      updateNote()
    } else if (paramid === 'new' && note.body !== null) {
      createNote()
    }
    navigate('/')
  }


  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
            <ArrowLeft onClick={() => handleSubmit()} />
        </h3>
        {paramid !== 'new' ? (
          <button onClick={() => deleteNote()}>DELETE</button>
        ) : (
          <button onClick={() => handleSubmit()}>Save</button>
        )}

      </div>
        <textarea onChange={(e) => {setNote({...note, 'body':e.target.value})}} value={note.body}>

        </textarea>
    </div>
  )
}

export default NotePage