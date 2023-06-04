import { Nav } from 'react-bootstrap';
import { navTabsConfig } from '../../../utils/configs';

function NavLinks({ activeTab }) {
    return (
        <Nav variant="pills" justify className="m-0 p-0">
            {navTabsConfig.tabs.map(({ id, title }) => (
                <Nav.Item key={id} className="mx-1">
                    <Nav.Link
                        eventKey={id}
                        as="button"
                        className={
                            id === activeTab
                                ? 'bg-secondary'
                                : 'bg-light text-body'
                        }
                    >
                        {title}
                    </Nav.Link>
                </Nav.Item>
            ))}
        </Nav>
    );
}

export default NavLinks;
