FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production --silent
RUN npm install -g nodemon
COPY . .
CMD ["nodemon", "bin/www"]