import React, { useState } from 'react';
import Notecard from './Notecard';
import NotepadForm from '../Form/NotepadForm';
import { IoIosArrowDown } from 'react-icons/io'

const Cardblock = () => {
    // define card and key index trackers, create a list to load cards from, and track form's visibility
    const [currentCardIndex, setCurrentCardIndex] = useState(0) 
    const [cardList, setCardList] = useState([])
    const [currentKeyIndex, setCurrentKeyIndex] = useState([])
    const [formStatus, setFormStatus] = useState(true)

    // REMINDER: cards must be deleted in order to keep indexes working![BUG]

    function addCard(item){ // BUGS: cardIndex and keyIndex starting at 1 instead of 0 
        let new_id = currentCardIndex // create temp value with state value
        item.id = new_id // set id of item passed in to temp state value
        setCurrentKeyIndex([...currentKeyIndex, currentCardIndex]) // add card index to tracking list
        setCardList([...cardList, item]) // add card to state list

        // series of console.logs for clarity on what is happening
        console.log(`CardList: ${JSON.stringify(cardList)}`)
        console.log(`CurrentKeyIndex List: ${JSON.stringify(currentKeyIndex)}`)
        console.log(`CurrentCardIndex: ${currentCardIndex}`)
        console.log('--------addCardFired---------')

        // iterate card index and make note in console
        setCurrentCardIndex(currentCardIndex + 1)
        console.log(`Iteration Occured! Current Value: ${currentCardIndex}`)
    }

    function removeCard(keyValue){ // function that removes a card using the passed in value
        const appendKeyList = currentKeyIndex.filter((index) => index !==keyValue) // filter out appropriate key index from key list
        const newList = cardList.filter((item) => item.id !== keyValue) // filter all items that have ids that match the passed value from the item list

        // console.logs for clarity
        console.log(`CardList: ${JSON.stringify(cardList)}`)
        console.log(`CurrentKeyIndex List: ${JSON.stringify(currentKeyIndex)}`)
        console.log('-------------removeCardFired---------------')

        // set keylist and cardlist to filtered versions created by function
        setCardList(newList)
        setCurrentKeyIndex(appendKeyList)

        // iterate current card index down by 1
        if (currentCardIndex !== 0) {setCurrentCardIndex(currentCardIndex - 1)}
    }

    function minimizeFormContent(){ // switch add card form from visible to hidden
        setFormStatus(!formStatus)
    }


  return (
    <div className="bg-gray-200">
        <div className="text-center">
        <div className="text-center font-bold text-2xl inline-block">Add a New Note</div>
        <div className=" border-black border-2 text-center bg-yellow-200 max-w-[2rem] max-h-[1.5rem] hover:bg-yellow-500 mr-1 inline-block hover:p-[.03rem] hover:rounded-lg"><button onClick={() => minimizeFormContent()}><IoIosArrowDown /></button></div>
        </div>
        <NotepadForm createCardFunction={addCard} currentIndex={currentCardIndex} formStatus={formStatus}/>
            <div className="bg-blue-300  min-h-screen p-2 grid grid-cols-1 gap-1 content-start">
                <ul className="list-none grid grid-cols-2 gap-1 content-start">
                {cardList?.map((item, index)=>{
                    return <li key={index}><Notecard cardTitle={item.nameText} cardText={item.contentText} divKey={index} handleRemove={removeCard} cardContent={item.createDate}/></li>
                })}
                </ul>
        </div>
    </div>
  );
};

export default Cardblock;
