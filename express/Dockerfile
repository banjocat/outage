from node:6

RUN mkdir -p /app
WORKDIR /app
COPY ./package.json .
RUN yarn
COPY ./index.js .
COPY ./models ./models
COPY ./controllers/ ./controllers

CMD node index.js
