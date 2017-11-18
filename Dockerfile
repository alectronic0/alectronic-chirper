FROM node:9

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY package.json yarn.lock /usr/src/app/
RUN yarn install

COPY . .
RUN yarn setup
RUN ./fakeversion.sh

EXPOSE 3000

CMD [ "yarn", "start" ]
