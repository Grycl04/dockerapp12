# Use official Nginx image
FROM nginx:alpine

# Copy all files to Nginx default public directory
COPY . /usr/share/nginx/html

# Expose port 80 to the host
EXPOSE 80
