FROM node:alpine
RUN npm install -g nodemon
RUN mkdir /usr/e-commerce
WORKDIR /usr/e-commerce
COPY package.json package.json
RUN npm install
ADD webpack.config.js webpack.config.js
ADD config.json config.json
CMD ["npm", "start"]

