import { Modal, Button, Stack, Row, Col, Container } from 'react-bootstrap';
import { useModalContext } from '../../../contexts/ModalContext';
import { getFormattedDate } from '../../../utils/utils';

function MessageModal() {
    const { modalIsOpen, modalData, closeModal } = useModalContext();

    return (
        <Modal
            show={modalIsOpen}
            onHide={closeModal}
            size="lg"
            centered
            scrollable
        >
            <Modal.Header className="p-1 px-md-3 py-md-2">
                <Modal.Title className="m-0 w-100 p-1 px-md-3">
                    <Row className="d-flex justify-content-between p-0">
                        <Col className="my-auto h5" xs={'auto'}>
                            <Stack gap={2}>
                                <Container className="p-0">
                                    <small className="text-muted">To:</small>{' '}
                                    <strong>{modalData?.to}</strong>
                                </Container>
                                <Container className="p-0">
                                    <small className="text-muted">From:</small>{' '}
                                    <strong>{modalData?.from}</strong>
                                </Container>
                            </Stack>
                        </Col>
                        <Col className="my-auto h5" xs={'auto'}>
                            <small className="text-muted mx-0 my-auto">
                                {getFormattedDate(modalData?.createdAt)}
                            </small>
                        </Col>
                    </Row>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="py-3 px-3">
                <Stack gap={4} className="px-4">
                    <Row>
                        <Col className="my-auto mx-auto h5" xs={'auto'}>
                            <small className="text-muted">Subject:</small>{' '}
                            <strong>{modalData?.subject}</strong>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="my-auto mx-auto h4" xs={'auto'}>
                            <p>{modalData?.message}</p>
                        </Col>
                    </Row>
                </Stack>
            </Modal.Body>
            <Modal.Footer className="p-2 d-flex justify-content-center">
                <Button
                    variant="secondary"
                    onClick={closeModal}
                    className="col-4"
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MessageModal;
