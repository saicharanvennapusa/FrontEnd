import React from "react";
import { createPortal } from "react-dom";

import "./ModalApp.css";
import Modal from "./Modal";

const ModalApp = () => {
   const [modalOpen, setModalOpen] = React.useState(false);
   const [message, setMessage] = React.useState("");

   const handleButtonClick = (value) => {
      setMessage(value);
      setModalOpen(false);
   };

   return (
      <div className="App">
         {message}
         <button className="btn btn-open" onClick={() => setModalOpen(true)}>
            {" "}
            Open
         </button>
         {modalOpen &&
            createPortal(
               <Modal closeModal={handleButtonClick} onSubmit={handleButtonClick} onCancel={handleButtonClick}>
                  <h1>Modal</h1>
                  <br />
                  <p>This is a modal description </p>
               </Modal>,
               document.body
            )}
      </div>
   );
};

export default ModalApp;
