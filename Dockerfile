FROM alpine:3.14

RUN mkdir -p /home/app
RUN apk add libc6-compat
ENV HOME=/home/app
ENV APP_HOME=/home/app/node

WORKDIR $APP_HOME
COPY ./entrypoint.sh ./entrypoint.sh
RUN chmod +x entrypoint.sh
COPY ./thesisd_binary/thesisd ./thesisd


ENTRYPOINT ["sh", "/home/app/node/entrypoint.sh"]