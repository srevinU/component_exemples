
FROM node:alpine AS base
USER root
WORKDIR /app
COPY ./package*.json /app/
RUN npm install

FROM base AS development
COPY . /app/
CMD ["npm", "run", "dev"]

EXPOSE 5173