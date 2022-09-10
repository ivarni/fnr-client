FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .
RUN rm .env

CMD ["sh", "-c", "npm run build && npm start -- -p $PORT"]

