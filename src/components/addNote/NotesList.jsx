import React, {useState} from 'react'
import Note from './Note';

const NotesList = () => {

  // fetching all notes from localstorage
  const [notes, setNotes] = useState(()=>{

  })

  // 

  return (
    <>
        <div className="note-List w-full px-14 py-5 text-white bg-gray-700 flex flex-col gap-5">
          <div className="notes-header flex justify-between items-center w-8/12">
            <h1 className='text-3xl  font-bold'>Your Notes</h1>
            
          </div>
            <div className="notes rounded-md border-4 border-gray-950 w-8/12 flex flex-col gap-1">
              <Note />
              <Note />
              <Note />
              <Note />
              <Note />
            </div>
        </div>
            
    </>
  )
}

export default NotesList