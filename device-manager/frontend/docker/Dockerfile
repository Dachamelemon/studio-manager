FROM node:14

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install -g ember-cli

RUN npm install

COPY . .

EXPOSE 4200

ENTRYPOINT ["ember", "serve", "--proxy", "http://studio-manager-dispatcher-1"]