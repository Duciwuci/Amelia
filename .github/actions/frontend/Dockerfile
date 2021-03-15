# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:lts-alpine AS build-stage

# Set working directory
WORKDIR /

# Add package.json to WORKDIR and install dependencies
COPY frontend/package*.json /
RUN yarn install

# Add source code files to WORKDIR, copy tsconfig.json and run build
COPY frontend/src ./src
COPY frontend/public ./public
COPY frontend/tsconfig.json /
RUN yarn run build

# Application port (optional)
EXPOSE 5000

## Container start command
CMD ["yarn", "start"]
