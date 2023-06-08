import { Col, Container, Navbar, Row } from 'react-bootstrap';
import Logo from './Logo';
import ProfileMenu from './ProfileMenu';
import { useWebSocketContext } from '../contexts/WebSocketContext';

function Header() {
    const { userData, isAuthorized, signOut } = useWebSocketContext();

    return (
        <header>
            <Navbar expand="md" bg="dark" variant="dark">
                <Container className="d-block">
                    <Row className="d-flex justify-content-between">
                        <Col className="my-auto col-auto">
                            <Logo />
                        </Col>
                        <Col className="my-auto col-auto">
                            {isAuthorized && (
                                <ProfileMenu
                                    handleClick={signOut}
                                    name={userData.user.name}
                                    disabled={false}
                                />
                            )}
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
