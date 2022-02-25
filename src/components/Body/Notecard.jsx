import Cardcontent from './Cardcontent';
import { AiOutlineClose } from 'react-icons/ai'
import { MdFavorite } from 'react-icons/md'
import { IoMdMoon, IoIosArrowDown, IoMdCreate } from 'react-icons/io'

import React, { useState, useRef } from 'react';

const Notecard = ( { cardTitle, cardText, divKey, handleRemove, cardContent} ) => {

    // create variable for index key, card background color, and card content visibility tracker
    // const key = divKey; // this variable stores the value of divKey for debug purposes
    const [cardBackground, setCardBackground] = useState('#fde047')
    const [contentVisible, setContentVisible] = useState(true)
    const [cardEditValue, setCardEditValue] = useState('')
    const [noteForm, setNoteForm] = useState(false)
    const [hasEditHappened, setHasEditHappened] = useState(false)
    const noteFormRef = useRef(null)
    

    
    // mark card as normal and reset bg color
    function resetCardBackground() {setCardBackground('#fde047') }

    // mark card as star with bg color
    function starCard() { 
        if (cardBackground !== '#f87171') {
            setCardBackground('#f87171') 
        } else {
            resetCardBackground()
        }
    }

    // mark card as moon with bg color
    function moonCard() {  
        if (cardBackground !== '#60a5fa') {
            setCardBackground('#60a5fa') 
        } else {
            resetCardBackground()
        }
    }

    // load edit form of card by toggling boolean
    function editContent(){
        setHasEditHappened(true)
        // console.log(cardEditValue)
        setNoteForm(!noteForm)
    }

    // minimize notecard content but keep title visible
    function minimizeContent() {
        setContentVisible(!contentVisible)
    }


  return (
    <>
        <div className="bg-yellow-300 max-w-sm min-w-[24rem] max-h-[16rem] h-auto p-4 m-3
        rounded border-black border-2 hover:bg-yellow-100 text-center overflow-scroll col-span-1
         text-black drop-shadow-xl" style={{backgroundColor: cardBackground}}>
            <div className=" border-black border-2 text-center bg-red-500 justify-left max-w-[2rem] max-h-[1.5rem] float-left hover:bg-red-300 mr-1 hover:p-[.03rem] hover:rounded-lg"><button onClick={() => handleRemove(divKey)}><AiOutlineClose /></button></div>
            <div className=" border-black border-2 text-center bg-red-500 justify-left max-w-[2rem] max-h-[1.5rem] float-left hover:bg-red-300 mr-1 hover:p-[.03rem] hover:rounded-lg"><button onClick={() => starCard()}><MdFavorite /></button></div>
            <div className=" border-black border-2 text-center bg-red-500 justify-left max-w-[2rem] max-h-[1.5rem] float-left hover:bg-red-300 mr-1 hover:p-[.03rem] hover:rounded-lg"><button onClick={() => moonCard()}><IoMdMoon /></button></div>
            <div className=" border-black border-2 text-center bg-red-500 justify-left max-w-[2rem] max-h-[1.5rem] float-left hover:bg-red-300 mr-1 hover:p-[.03rem] hover:rounded-lg"><button onClick={() => minimizeContent()}><IoIosArrowDown /></button></div>
            <div className=" border-black border-2 text-center bg-green-500 justify-left max-w-[2rem] max-h-[1.5rem] float-left hover:bg-green-300 mr-1 hover:p-[.03rem] hover:rounded-lg"><button onClick={() => editContent()}><IoMdCreate size={20} /></button></div>
            <div className="font-bold text-lg">{cardTitle}</div>
            { noteForm ? 
            <form>
                <textarea className="appearance-none border rounded w-full py-2 px-3 text-center" ref={noteFormRef} defaultValue={cardEditValue ? cardEditValue : cardText} onChange={event => setCardEditValue(event.target.value)}></textarea>
            </form>
            :
            <Cardcontent cardText={cardText} cardEdit={cardEditValue} visibleStatus={contentVisible} editStatus={hasEditHappened} dateValue={cardContent}/> }
        </div>
    </>
  );
};

export default Notecard;



