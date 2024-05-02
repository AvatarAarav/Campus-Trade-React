FROM node

WORKDIR /app

COPY package.json .

RUN npm install -f

COPY . . 

EXPOSE 8000

CMD ["npm", "start"]