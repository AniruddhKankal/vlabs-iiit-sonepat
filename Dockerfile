FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY stubs ./stubs

RUN npm install

COPY . .

EXPOSE 3003

CMD ["npm", "run", "dev"]
