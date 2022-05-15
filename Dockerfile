FROM node:lts-alpine

RUN npm install --global live-server

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "run", "dev" ]
