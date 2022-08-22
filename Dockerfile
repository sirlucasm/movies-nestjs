FROM node:16.8-alpine3.11 as builder

ENV NODE_ENV build

WORKDIR /home/node

COPY . /home/node
