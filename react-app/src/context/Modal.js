import React, { useRef, useState, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [modalContent, setModalContent] = useState(null);
  // callback function that will be called when modal is closing
  const [onModalClose, setOnModalClose] = useState(null);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const closeModal = () => {
    setModalContent(null);
    setShowBackdrop(false);
    if (typeof onModalClose === 'function') {
      setOnModalClose(null);
      onModalClose();
    }
  };

  // Effect to show or hide the backdrop based on whether modalContent is set
  useEffect(() => {
    setShowBackdrop(!!modalContent);
  }, [modalContent]);

  const contextValue = {
    modalRef, // reference to modal div
    modalContent, // React component to render inside modal
    setModalContent, // function to set the React component to render inside modal
    setOnModalClose, // function to set the callback function called when modal is closing
    closeModal, // function to close the modal
    showBackdrop,
  };

  return (
    <>
      <ModalContext.Provider value={contextValue}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal() {
  const { modalRef, modalContent, closeModal, showBackdrop } = useContext(ModalContext);
  // If there is no div referenced by the modalRef or modalContent is not a
  // truthy value, render nothing:



  if (!modalRef || !modalRef.current || !modalContent) return null;
    const stopPropagation = (e) => {
    e.stopPropagation();
  };

  // Render the following component to the div referenced by the modalRef
  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-backdrop" style={{ display: showBackdrop ? 'block' : 'none' }} onClick={closeModal}></div>
      <div id="modal-background"  />

      <div id="modal-content" onClick={stopPropagation}>
        {modalContent}
      </div>
    </div>,
    modalRef.current
  );
}

export const useModal = () => useContext(ModalContext);
