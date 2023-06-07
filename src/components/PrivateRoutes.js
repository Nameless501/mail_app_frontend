import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { routesConfig } from '../utils/configs';
import { Spinner, Container } from 'react-bootstrap';
import { useAuthorizationContext } from '../contexts/AuthorizationContext';

function PrivateRoutes() {
    const [isAllowed, setIsAllowed] = useState();

    const { isAuthorized } = useAuthorizationContext();

    useEffect(() => {
        setIsAllowed(isAuthorized);
    }, [isAuthorized]);

    if (isAllowed === undefined)
        return (
            <Container className="mt-5 d-flex justify-content-center">
                <Spinner animation="border" role="status" />
            </Container>
        );

    return isAllowed ? <Outlet /> : <Navigate to={routesConfig.signIn} />;
}

export default PrivateRoutes;
