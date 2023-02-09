FROM alpine:3.14

RUN mkdir -p /home/app
RUN apk add libc6-compat gettext

ENV HOME=/home/app
ENV APP_HOME=/home/app/node

WORKDIR $APP_HOME
RUN ls
COPY ./template_config/config ./templates
COPY ./entrypoint.sh ./entrypoint.sh

COPY ./thesisd_binary/thesisd ./thesisd


ENTRYPOINT ["sh", "/home/app/node/entrypoint.sh"]