FROM node

# Set working directory

# Add package.json to WORKDIR and install dependencies
COPY . /game

WORKDIR /game

RUN npm install

# Add source code files to WORKDIR, copy tsconfig.json and run build
RUN npm run build

# Application port (optional)
EXPOSE 5000

## Container start command
CMD ["npm","run","serve"]
