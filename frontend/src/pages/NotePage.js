import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
//import notes from '../assets/data.js'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = () => {
  let paramid = useParams().id
  //let note = notes.find(note => note.id === Number(paramid))
  let [note, setNote] = useState([])

  useEffect(() => {

    let getNote = async () => {
      let response = await fetch(`/api/notes/${paramid}`)
      let data = await response.json()
      setNote(data)
    }

    getNote()
  },[paramid])




  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
         <Link to='/'>
            <ArrowLeft />
         </Link>
        </h3>
      </div>
        <textarea defaultValue={note.body}>

        </textarea>
    </div>
  )
}

export default NotePage