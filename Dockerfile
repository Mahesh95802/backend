FROM alpine:latest

RUN apk add --update nodejs npm git

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

ENTRYPOINT ["npx", "nodemon", "src/index.js"]