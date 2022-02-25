
import React from 'react';
import { useState, useRef } from 'react'

const NotepadForm = ({ createCardFunction, currentIndex, formStatus }) => {

    // two state variables that represent values for name and content of notecard
    const [newNoteName, setNewNoteName] = useState('N/A');
    const [newNoteContents, setNewNoteContents] = useState('N/A');

    const NewNN = useRef(); // ref for Note Name input field
    const NewNC = useRef(); // ref for Note Content input field

    function addNote(e){ // add a note and pass in event via standard javascript
        if (!newNoteName || !newNoteContents) return // if no values present somehow do not fire function!
        e.preventDefault() // prevent page reload 

        let dateObject = new Date()
        let creationDate = `${dateObject.getMonth()+1}/${dateObject.getDate()}/${dateObject.getFullYear()}`

        // create new note object with values
        let newNote = {id: currentIndex, nameText: newNoteName, contentText: newNoteContents, createDate: creationDate}

        // call passed in function on new object(goes to addcard in cardblock...)
        createCardFunction(newNote)

        // reset input fields and temp data values
        setNewNoteName('N/A')
        setNewNoteContents('N/A')
        NewNC.current.value = ""
        NewNN.current.value = ""
    }


    // conditionally render form when formStatus is true. if not true then render blank div...
  return(
      <>
      { formStatus ?
      <div>
          <form onSubmit={addNote} className="font-bold p-2 text-center rounded border-2 border-black bg-[#C8C2AE]">
              <label htmlFor="NoteField" className="text-xl">New Note Name:</label>
              <input type="text" ref={NewNN} onChange={event => setNewNoteName(event.target.value)} id="NoteField" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 text-center"/>
              <label htmlFor="NoteContentArea" className="text-xl">New Note Contents:</label>
              <textarea ref={NewNC} id="NoteContentArea" onChange={event => setNewNoteContents(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 text-center"></textarea>
              <br />
              <button type="submit" className="bg-yellow-200 rounded border-2 border-black hover:bg-yellow-500 mt-2 p-1 hover:font-bold">Add New Note</button>
          </form>
      </div> : <div></div>
      }
      </>
  );
};

export default NotepadForm;
