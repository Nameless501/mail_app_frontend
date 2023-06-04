import { Card, Container } from 'react-bootstrap';

function MessageCard() {
    return (
        <Card className="rounded-1 border-dark" style={{ overflow: 'hidden' }}>
            <Card.Body className="p-0">
                <Container className="px-3 py-3 d-flex justify-content-between bg-light">
                    <Card.Title className="mx-0 my-auto">
                        <span className="text-muted">From:</span>{' '}
                        <span>Someone</span>
                    </Card.Title>
                    <Card.Subtitle className="text-muted mx-0 my-auto">
                        24.10.2022, 14:00
                    </Card.Subtitle>
                </Container>
                <Card.Text className="p-3 mx-0 my-auto">
                    <span className="text-muted">Subject:</span>{' '}
                    <span>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MessageCard;
