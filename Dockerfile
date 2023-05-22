# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy all content of directory to the container
COPY . .

# Install dependencies
RUN apk add bash && \
    npm link @angular/cli@v11.0.7

# Define the command to run when the container starts
CMD ["ng","serve","--port","3000"]