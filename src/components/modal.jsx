import React from 'react';
 const Modal = props => {

  
    
 let {isOpen,mainBackgroundColor,headerBackgroundColor,modalTitle,closeButton,onclose,modalText,modalSubText,action} = props
      return(
        <>{isOpen&&
<div data-testid="modal-container" style={{backgroundColor: `${mainBackgroundColor}`}}className="modal-body">
  <div style={{backgroundColor: `${headerBackgroundColor}`}}className="modal-header">
    <h1 className="modal-title">
      {modalTitle}
  {closeButton? <img className="modal-cross" onClick={onclose}  src='./cross.png'/> : <></>}
    </h1>
  </div>
  <p className="modal-text">
  {modalText}
  </p>
  <p className="modal-sub-text">{modalSubText} </p>
  {action}
        </div>
       }
        </>
      )
    }
  
  export default Modal