FROM node:alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json file
COPY package*.json ./

# Install dependencies
RUN pnpm install

# Copy the rest of the code
COPY . ./

# Expose the port
EXPOSE 3000

# Run the command to start the development server
CMD ["pnpm", "run", "dev"]