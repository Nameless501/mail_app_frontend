import { Alert } from 'react-bootstrap';
import { DEFAULT_ERROR_MESSAGE } from '../utils/constants';

function DefaultErrorAlert() {
    return (
        <Alert variant="danger" className="text-center col-xs-10 mx-auto">
            {DEFAULT_ERROR_MESSAGE}
        </Alert>
    );
}

export default DefaultErrorAlert;
