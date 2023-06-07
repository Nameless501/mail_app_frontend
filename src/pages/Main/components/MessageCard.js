import { Card, Container } from 'react-bootstrap';
import { getFormattedDate } from '../../../utils/utils';

function MessageCard({ subject, from, to, createdAt, place }) {
    return (
        <Card className="rounded-1 border-dark" style={{ overflow: 'hidden' }}>
            <Card.Body className="p-0">
                <Container className="px-3 py-3 d-flex justify-content-between bg-light">
                    <Card.Title className="mx-0 my-auto">
                        <small className="text-muted">
                            {place === 'inbox' ? 'From:' : 'To:'}
                        </small>{' '}
                        <strong>{place === 'inbox' ? from : to}</strong>
                    </Card.Title>
                    <Card.Subtitle className="text-muted mx-0 my-auto">
                        <small>{getFormattedDate(createdAt)}</small>
                    </Card.Subtitle>
                </Container>
                <Card.Text className="p-3 mx-0 my-auto">
                    <small className="text-muted">Subject:</small>{' '}
                    <span>{subject}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MessageCard;
