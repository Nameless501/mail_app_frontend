import { Routes, Route, Navigate } from 'react-router-dom';
import { Stack } from 'react-bootstrap';
import { WebSocketContextProvider } from './contexts/WebSocketContext';
import { ModalContextProvider } from './contexts/ModalContext';
import Header from './components/Header';
import PrivateRoutes from './components/PrivateRoutes';
import Main from './pages/Main';
import Sign from './pages/Sign';
import MessageNotification from './components/MessageNotification';
import { routesConfig } from './utils/configs';

function App() {
    return (
        <WebSocketContextProvider>
            <ModalContextProvider>
                <div>
                    <Stack gap={5}>
                        <Header />
                        <Routes>
                            <Route element={<PrivateRoutes />}>
                                <Route
                                    path={routesConfig.main}
                                    element={<Main />}
                                    exact
                                />
                            </Route>
                            <Route
                                path={routesConfig.signIn}
                                element={<Sign />}
                            />
                            <Route
                                path="*"
                                element={
                                    <Navigate to={routesConfig.main} replace />
                                }
                            />
                        </Routes>
                    </Stack>
                </div>
                <MessageNotification />
            </ModalContextProvider>
        </WebSocketContextProvider>
    );
}

export default App;
