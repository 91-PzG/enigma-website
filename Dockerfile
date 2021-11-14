FROM nginx:1.20-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist /usr/share/nginx/html
EXPOSE 4200