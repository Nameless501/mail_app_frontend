import { Routes, Route, Navigate } from 'react-router-dom';
import { Stack } from 'react-bootstrap';
import { AuthorizationContextProvider } from './contexts/AuthorizationContext';
import Header from './components/Header';
import PrivateRoutes from './components/PrivateRoutes';
import Main from './pages/Main';
import Sign from './pages/Sign';
import { routesConfig } from './utils/configs';

function App() {
    return (
        <AuthorizationContextProvider>
            <div style={{ minHeight: '100vh' }}>
                <Stack gap={5}>
                    <Header />
                    <Routes>
                        {/*<Route element={<PrivateRoutes />}>*/}
                        {/*    <Route*/}
                        {/*        path={routesConfig.main}*/}
                        {/*        element={<Main />}*/}
                        {/*        exact*/}
                        {/*    />*/}
                        {/*</Route>*/}
                        <Route path={routesConfig.main} element={<Main />} />
                        <Route
                            path="*"
                            element={
                                <Navigate to={routesConfig.main} replace />
                            }
                        />
                    </Routes>
                </Stack>
            </div>
        </AuthorizationContextProvider>
    );
}

export default App;
