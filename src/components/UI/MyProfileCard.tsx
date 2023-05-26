import React, { FC } from "react";
import { Card, Row } from "react-bootstrap";

import UserAvatar from "@components/UI/UserAvatar";

import myUserAvatar from "../../assets/avatar.png";

const MyProfileCard: FC = () => {
    return (
        <Card
            style={{ width: "100%" }}
            className="p-4 my-3 d-flex align-items-center"
        >
            <UserAvatar image={myUserAvatar} size={200} className="my-1" />
            <Card.Body>
                <Row className="my-1 d-flex text-center justify-content-center">
                    <Card.Title className="m-0">Максим</Card.Title>
                    <span className="fs-6 fw-normal">
                        Email: gmd29999@yandex.ru
                    </span>
                </Row>
                <Row>
                    <span className="fw-semibold my-1">Обо мне: </span>
                    <Card.Text>
                        Уже больше года изучаю и занимаюсь разработкой на{" "}
                        <b>React + Typescript + Redux</b>, также обладаю
                        навыками <b>unit тестирования</b>, адаптивной верстки,
                        знаю <b>Sass</b> и <b>БЭМ</b>, знаком с <b>gitflow</b>{" "}
                        имею базовое понимание от создания ветки до пулреквеста,
                        также могу написать базовую конфигурацию <b>Webpack</b>{" "}
                        и <b>Docker</b>. Способен самостоятельно выполнять
                        задачи и находить решения. <br />
                        Также уже выполнял тестовое задание c использованием{" "}
                        <b>redux-saga</b>:<br />
                        Приложение для поиска отелей демо(демо):
                        <a href="https://simple-hotels-check.netlify.app">
                            https://simple-hotels-check.netlify.app
                        </a>
                        <br />
                        Github репозиторий:{" "}
                        <a href="https://github.com/JustFeitan/simple-hotel-check">
                            ссылка
                        </a>{" "}
                        <br />
                        В данный момент ищу работу и параллельно занимаюсь
                        изучением нового, выполняю тестовые задания и делаю пет
                        проект с вышеописанными технологиями -<br />
                        Деплой версия -
                        <a href="https://animagach.netlify.app">
                            https://animagach.netlify.app
                        </a><br />
                        Github репозиторий:{" "}
                        <a href="https://github.com/JustFeitan/anime-list">
                            https://github.com/JustFeitan/anime-list
                        </a>
                        (бэк может быть в слип моде надо подождать 10-20 секунд)
                        <br />
                        Во время учебы пол года участвовал в open source проекте
                        с Angular -
                        <a href="https://github.com/Reckue/post-ui">
                            https://github.com/Reckue/post-ui
                        </a>
                        .<br />
                        Важно для меня: работа в команде, хорошая мотивационная
                        система, хороший коллектив.
                    </Card.Text>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default MyProfileCard;
