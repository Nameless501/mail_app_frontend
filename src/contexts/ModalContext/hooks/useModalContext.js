import { useContext } from 'react';
import ModalContext from '../context/ModalContext';

export function useModalContext() {
    const contextValue = useContext(ModalContext);
    return { ...contextValue };
}
