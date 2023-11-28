FROM node:21

# Make the backend
WORKDIR /home/backend
COPY ./backend .
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "serve"]
