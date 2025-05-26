# Use official Nginx image
FROM nginx:alpine

# Remove defualt nginx web
RUN rm -rf /usr/share/nginx/html/*

#Copy your static web to nginx directory
COPY ./usr/share/nginx/html

#Expose port 80
EXPOSE 80