FROM node

RUN mkdir /code

ADD package.json /code/package.json
RUN cd /code && npm cache clean && npm install --production

WORKDIR /code
ADD . /code

RUN chmod +x hooks/pre_push
RUN npm rebuild node-sass
RUN npm run compile

EXPOSE 3000
