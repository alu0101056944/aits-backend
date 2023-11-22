FROM node:16

# Make the backend
WORKDIR /home/backend
COPY ./backend .
RUN npm install
EXPOSE 8080
