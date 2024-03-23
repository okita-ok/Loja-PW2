FROM node:20-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY ./ ./

EXPOSE 4456

CMD ["sh", "start.sh"]