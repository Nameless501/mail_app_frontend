import { Col, Container, Navbar, Row } from 'react-bootstrap';
import Logo from './Logo';
import ProfileMenu from './ProfileMenu';

function Header() {
    return (
        <header>
            <Navbar expand="md" bg="dark" variant="dark">
                <Container className="d-block">
                    <Row className="d-flex justify-content-between">
                        <Col className="my-auto col-auto">
                            <Logo />
                        </Col>
                        <Col className="my-auto col-auto">
                            <ProfileMenu
                                handleClick={() => ''}
                                name={'User name'}
                                disabled={false}
                            />
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
