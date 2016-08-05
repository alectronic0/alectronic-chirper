FROM node:9

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .
RUN ./fakeversion.sh

EXPOSE 8080

CMD [ "yarn", "start" ]
