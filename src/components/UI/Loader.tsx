import React, {FC} from 'react';
import {Row, Spinner} from "react-bootstrap";

const Loader: FC = () => {
    return (
        <Row className='m-5 d-flex justify-content-center align-items-center'>
            <Spinner
                role='status'
                animation='border'
                variant='primary'
            >
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Row>
    );
};

export default Loader;
