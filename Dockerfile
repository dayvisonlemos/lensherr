FROM node:carbon-alpine

ENV HOME=/home/app

COPY package.json package-lock.json $HOME/xlensherr/

WORKDIR $HOME/xlensherr

RUN npm i

COPY . $HOME/xlensherr

EXPOSE 3000

CMD ["npm", "start"]
