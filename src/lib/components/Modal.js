import React from "react";
import "../components/styles/main.css";
import { useState } from "react";
import PropTypes from "prop-types";

const Modal = ({
    title,
    image,
    text,
    show,
    backgroundColor,
    buttonColor,
    buttonTextColor,
}) => {
    const [showModal, setShowModal] = useState(show);

    return (
        <>
            <div
                className="modal-background"
                style={{
                    display: !showModal ? "none" : "flex",
                    backgroundColor: backgroundColor
                        ? backgroundColor
                        : "white",
                }}
            >
                <div
                    className="modal-container"
                    style={{ display: !showModal ? "none" : "flex" }}
                >
                    {image ? (
                        <img
                            src={image}
                            alt="icon of modal"
                            className="image-modal"
                        />
                    ) : null}
                    {title ? <h2 className="modal-title">{title}</h2> : null}
                    {text ? <p>{text}</p> : null}

                    <button
                        className="modal-button"
                        onClick={() => setShowModal(false)}
                        style={{
                            backgroundColor: buttonColor ? buttonColor : "red",
                            color: buttonTextColor ? buttonTextColor : "black",
                        }}
                    >
                        OK
                    </button>
                </div>
            </div>
        </>
    );
};

export default Modal;

Modal.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string,
    show: PropTypes.bool.isRequired,
};
