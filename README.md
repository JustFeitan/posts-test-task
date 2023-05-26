# Тестовое задание для Junior Frontend Developer

Web приложение для переписки, сделанное на основе ватсапа.
Сылка на развернутую на хостинге версию(
Netify): 

## Инструкции для локального запуска:

### Docker:

1. `git clone https://github.com/JustFeitan/posts-test-project.git`;
2. `docker-compose up`
3. Перейти на `https://localhost:3000`

### Без докера:

1. `git clone https://github.com/JustFeitan/posts-test-project.git`;
2. `npm i`
3. `npm start`
4.  Перейти на `https://localhost:3000`

## Техническое задание:

Нужно создать сайт с постами, где будут присутствовать 3 страницы (роута):

1. Список постов (главная страница), где будут располагаться все посты.

2. Обо мне, где будет располагаться краткая информация о Вас.

3. Подробности о пользователе (куда необходимо вывести информацию о пользователе и список его постов)

Получить данные необходимо через фейковое api https://jsonplaceholder.typicode.com.

## Использеумый стэк

### Front-end:

- React
- React-bootstrap
- React-router
- Axios
- Redux + Redux Toolkit
- Redux-saga
- Typescript
- jest/React Testing Library
- Git

### Сборка:

- Webpack
- Docker

## Available Scripts

### `npm start`

Запустить приложение локально

### `npm run build-dev`

Запустить сборку девелопмент версии приложения

### `npm run build-prod`

Запустить сборку продакшен версии приложения

### `npm run test`

Запустить тесты

### `npm run clean`

Удалить dist директорию
