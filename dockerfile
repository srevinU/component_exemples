
FROM node:alpine AS base
USER root
WORKDIR /app
COPY ./package*.json /app/
RUN npm install

FROM base AS development
COPY . /app/
CMD ["npm", "run", "dev"]

FROM base AS production
COPY ./dist /app/dist
COPY ./public /app/public
COPY tsconfig.json /app/
COPY vite.config.ts /app/
CMD ["npm", "run", "build2"]
CMD ["npm", "run", "preview"]