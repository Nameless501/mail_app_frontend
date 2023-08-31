import { routesConfig } from '../utils/configs';
import { Navbar, Stack } from 'react-bootstrap';
import { BsFillChatFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to={routesConfig.main}>
            <Navbar.Brand className="d-inline-block">
                <Stack direction="horizontal" gap={2}>
                    <span>Mail App</span>
                    <BsFillChatFill className="align-middle" />
                </Stack>
            </Navbar.Brand>
        </Link>
    );
}

export default Logo;
