import { Card, Container, Stack } from 'react-bootstrap';
import { getFormattedDate } from '../../../utils/utils';

function MessageCard({ subject, from, to, createdAt }) {
    return (
        <Card className="rounded-1 border-dark" style={{ overflow: 'hidden' }}>
            <Card.Body className="p-0">
                <Container className="px-3 py-2 d-flex bg-light justify-content-between">
                    <Card.Title className="mx-0 my-auto d-flex-column">
                        <Stack gap={2}>
                            <Container className="p-0">
                                <small className="text-muted">To:</small>{' '}
                                <strong>{to}</strong>
                            </Container>
                            <Container className="p-0">
                                <small className="text-muted">From:</small>{' '}
                                <strong>{from}</strong>
                            </Container>
                        </Stack>
                    </Card.Title>
                    <Card.Subtitle className="mx-0 my-auto align-self-center">
                        <small className="h6">
                            {getFormattedDate(createdAt)}
                        </small>
                    </Card.Subtitle>
                </Container>
                <Card.Text className="p-3 mx-0 my-auto text-center">
                    <small className="text-muted">Subject:</small>{' '}
                    <strong className="h5">{subject}</strong>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MessageCard;
