import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AppRoutes } from "../routing/AppRoutes";

const NotFoundPage = () => {
    return (
        <Container className='"d-flex align-items-center justify-content-center vh-100"'>
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3">
                    <span className="text-danger">Упс!</span> Страница не
                    найдена.
                </p>
                <p className="lead">
                    Страница, которую вы ищете, не существует.
                </p>
                <Link to={AppRoutes.POSTS}>Назад</Link>
            </div>
        </Container>
    );
};

export default NotFoundPage;
