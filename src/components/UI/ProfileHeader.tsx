import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";

import UserAvatar from "@components/UI/UserAvatar";

import myUserAvatar from "../../assets/avatar.png";

const ProfileHeader: FC = () => {
    return (
        <Row className="d-flex m-1">
            <Col
                xs="auto"
                className=" p-0 d-flex flex-nowrap align-items-center"
            >
                <UserAvatar image={myUserAvatar} size={90} />
            </Col>
            <Col className="d-flex flex-column justify-content-center">
                <h4 className="m-0">Максим</h4>
                <span className="fs-6 fw-normal">
                    Email: gmd29999@yandex.ru
                </span>
            </Col>
        </Row>
    );
};

export default ProfileHeader;
