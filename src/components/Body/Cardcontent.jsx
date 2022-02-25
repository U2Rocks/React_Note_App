
import React from 'react';

// conditionally render cardtext based on visibleStatus state from above component...

const Cardcontent = ( {cardText, visibleStatus, cardEdit, editStatus, dateValue} ) => { 
  // this double turnery first checks if the visibleStatus is true and if it is true
  // the next turnery checks if any edit has happened and changes the contents under two conditions
  // the editStatus must be true and the value of cardEdit must not be blank for the contents to change
  return (<div>
   { visibleStatus ? <div className="mt-2">{editStatus && cardEdit ? cardEdit : cardText}</div> : <div></div> }
   <div className="mt-2">Note Created: {dateValue}</div>
  </div>
  )
};


export default Cardcontent;
