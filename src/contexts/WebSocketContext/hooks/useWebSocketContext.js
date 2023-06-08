import { useContext } from 'react';
import WebSocketContext from '../context/WebSocketContext';

export function useWebSocketContext() {
    const contextValue = useContext(WebSocketContext);
    return { ...contextValue };
}
