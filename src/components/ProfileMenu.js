import { Stack, Button, Card } from 'react-bootstrap';
import { FiLogOut } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';

function ProfileMenu({ name, handleClick, disabled }) {
    return (
        <Card>
            <Card.Body className="p-0 p-sm-1">
                <Stack direction="horizontal" className="my-auto" gap={2}>
                    <Stack
                        direction="horizontal"
                        gap={2}
                        className="p-0 my-auto mx-2"
                    >
                        <Card.Text className="m-0 d-none d-sm-block">
                            <FaUser className="d-block" />
                        </Card.Text>
                        <Card.Text className="m-0">{name}</Card.Text>
                    </Stack>
                    <Button
                        variant="danger"
                        onClick={handleClick}
                        disabled={disabled}
                        className="py-1 px-2 px-md-3"
                    >
                        <Stack direction="horizontal" gap={2}>
                            <span>Sign-out</span>
                            <FiLogOut className="d-block" />
                        </Stack>
                    </Button>
                </Stack>
            </Card.Body>
        </Card>
    );
}

export default ProfileMenu;
