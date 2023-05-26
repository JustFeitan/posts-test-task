FROM node:alpine
WORKDIR /posts-test-project
COPY package.json .
RUN npm i
COPY . .

