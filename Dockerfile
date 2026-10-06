FROM node:20-alpine

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY package*.json ./
COPY stubs ./stubs

RUN npm ci

COPY . .

EXPOSE 3003

CMD ["npm", "run", "dev"]
