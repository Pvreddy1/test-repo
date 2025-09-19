FROM node:18-alpine
 
# Set working directory
WORKDIR /usr/src/app
 
# Copy package.json and install dependencies
COPY package.json ./
RUN npm install --only=production
 
# Copy application code
COPY app.js ./
 
# Run Node.js app as entrypoint
ENTRYPOINT ["node", "app.js"]