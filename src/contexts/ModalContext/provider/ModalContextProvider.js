import { useState } from 'react';
import ModalContext from '../context/ModalContext';

export function ModalContextProvider({ children }) {
    const [modalIsOpen, setModalState] = useState(false);

    const [modalData, setModalData] = useState();

    const openModal = (data) => {
        setModalData(data);
        setModalState(true);
    };

    const closeModal = () => {
        setModalData('');
        setModalState(false);
    };

    return (
        <ModalContext.Provider
            value={{ modalIsOpen, modalData, openModal, closeModal }}
        >
            {children}
        </ModalContext.Provider>
    );
}
