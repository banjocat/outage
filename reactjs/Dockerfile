FROM nginx:latest

COPY ./build/. /usr/share/nginx/html/.

# For development and hacky
RUN mkdir -p /app
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /app


