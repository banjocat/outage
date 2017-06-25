from node:6

RUN mkdir -p /app
WORKDIR /app
COPY ./package.json .
RUN yarn
COPY ./index.js .
COPY ./models ./models

CMD node index.js
