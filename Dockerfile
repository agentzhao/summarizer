FROM node:lts-alpine
# RUN apk update && apk add python make g++

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN chmod -R 777 .

EXPOSE 8080
CMD [ "npm", "run", "serve" ]
