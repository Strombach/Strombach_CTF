FROM node:22.15.0-bookworm AS base

WORKDIR /usr/src/app

COPY package*.json ./

# Stage 2: dev
FROM base AS dev
ENV NODE_ENV=development
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

# Stage 3: prod
FROM base AS prod
ENV NODE_ENV=production
RUN npm install --omit=dev
COPY . .
CMD ["node", "index.js"]