FROM node:17.4.0-alpine3.15
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 5000
CMD node app.js