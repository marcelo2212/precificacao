FROM node:10-alpine

EXPOSE 3100

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm","start"]