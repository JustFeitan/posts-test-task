import React, {FC} from 'react';
import UserAvatar from "@components/UI/UserAvatar";
import myUserAvatar from "../../assets/avatar.png";
import {Card, Row} from "react-bootstrap";

const MyProfileCard: FC = () => {
    return (
        <Card style={{width: '100%'}} className='p-4 my-3 d-flex align-items-center'>
            <UserAvatar image={myUserAvatar} size={200} className='my-1'/>
            <Card.Body>
                <Row className='my-1 d-flex text-center justify-content-center'>
                    <Card.Title className='m-0'>Максим</Card.Title>
                    <span className='fs-6 fw-normal'>Email: gmd29999@yandex.ru</span>
                </Row>
                <Row>
                    <span className='fw-semibold my-1'>Обо мне: </span>
                    <Card.Text>
                        Уже больше года изучаю и занимаюсь разработкой на React + Typescript + Redux,
                        также обладаю навыками unit тестирования, адаптивной верстки, знаю Sass и БЭМ,
                        знаком с gitflow имею базовое понимание от создания ветки до пулреквеста, также
                        могу написать базовую конфигурацию Webpack. Способен самостоятельно выполнять
                        задачи и находить решения. <br/>
                        В данный момент ищу работу и параллельно занимаюсь изучением нового, выполняю
                        тестовые задания и делаю пет проект с вышеописанными технологиями -<br/>
                        Деплой версия - <a href="https://animagach.netlify.app">https://animagach.netlify.app</a><br/>
                        <a href="https://github.com/JustFeitan/anime-list">https://github.com/JustFeitan/anime-list</a>
                        (бэк может быть в слип моде надо
                        подождать 10-20 секунд)<br/>
                        Во время учебы пол года участвовал в open source проекте с Angular -
                        <a href="https://github.com/Reckue/post-ui">https://github.com/Reckue/post-ui</a>.<br/>
                        Важно для меня: работа в команде, хорошая мотивационная система, хороший
                        коллектив.
                    </Card.Text>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default MyProfileCard;
