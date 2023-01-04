import React from "react";
import "../components/styles/main.css";
import { useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ title, image, text, show }) => {
    const [showModal, setShowModal] = useState(show);

    return (
        <div
            className="modal-container"
            style={{ display: !showModal ? "none" : "flex" }}
        >
            {image ? (
                <img src={image} alt="icon of modal" className="image-modal" />
            ) : null}
            {title ? <h2 className="modal-title">{title}</h2> : null}
            {text ? <p>{text}</p> : null}

            <button
                className="modal-button"
                onClick={() => setShowModal(false)}
            >
                OK
            </button>
        </div>
    );
};

export default Modal;

Modal.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string,
    show: PropTypes.bool.isRequired,
};
