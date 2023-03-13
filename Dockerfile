FROM node:18-alpine
EXPOSE 3000
WORKDIR /picsome
COPY package.json .
RUN npm install
COPY . .
CMD npm run dev