#!/bin/sh

if [ ! -f /home/app/.thesis ]
then
  cp /run/secrets/.thesis /home/app/.thesis -r
fi

exec "$@"