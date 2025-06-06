FROM node:18-alpine AS base
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN ng build --configuration production

EXPOSE 4200
CMD ["npm", "run", "start:prod"]