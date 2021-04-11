# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node

# Set working directory
COPY . /frontend

WORKDIR /frontend

# Add package.json to WORKDIR and install dependencies
RUN yarn install

# Add source code files to WORKDIR, copy tsconfig.json and run build
RUN yarn run build
RUN yarn global add serve

# Application port (optional)
EXPOSE 5000

## Container start command
CMD ["serve","-s", "build"]