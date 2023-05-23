import React, {FC} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {Card, Row} from "react-bootstrap";
import AvatarIcon from "@components/UI/Icons/AvatarIcon";

const UserDetailsPage: FC = () => {

   const {userId} = useParams();


    return (
        <div>
            <Card>

                <Card.Body>
                    <Card.Header >
                        <AvatarIcon/>
                        <Card.Title className='m-0'>Максим</Card.Title>
                        <span className='fs-6 fw-normal'>Email: gmd29999@yandex.ru</span>
                    </Card.Header>
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
                            Деплой версия - https://animagach.netlify.app<br/>
                            https://github.com/JustFeitan/anime-list. (бэк может быть в слип моде надо
                            подождать 10-20 секунд)<br/>
                            Во время учебы пол года участвовал в open source проекте с Angular -
                            https://github.com/Reckue/post-ui.<br/>
                            Важно для меня: работа в команде, хорошая мотивационная система, хороший
                            коллектив.
                        </Card.Text>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserDetailsPage;
