FROM node:alpine
WORKDIR .
COPY package.json .
RUN npm i
COPY . .

