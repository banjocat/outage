from node:6

RUN mkdir -p /app
WORKDIR /app
copy ./package.json .
RUN yarn
copy ./index.js .

CMD node index.js
