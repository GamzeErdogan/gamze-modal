import React from "react";
import "../components/styles/main.css";
import { useState } from "react";


const Modal = ({ title, image, text,show}) => {
    const [closeModal, setCloseModal] = useState(false);
    const [showModal,setShowModal] = useState(show);
    return (
        <>
        {showModal ?  <div
            className="modal-container"
            style={{ display: closeModal ? "none" : 'flex'}}
        >
            <img src={image} alt="icon of modal" className="image-modal" />
            <h2 className="modal-title">{title}</h2>
            <p>{text}</p>
            <button className="modal-button" 
            onClick={() =>setCloseModal(true)}
            >
                OK
            </button>
        </div> : null}
        </>
    );
};

export default Modal;
