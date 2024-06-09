FROM node:20.11.1

# Create app directory
COPY ./app /app

WORKDIR /app

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose port 3000
EXPOSE 3001

CMD ["node", "transpiled.js"]