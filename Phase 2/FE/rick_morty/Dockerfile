FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install bootstrap react-bootstrap react-router-dom tailwindcss @tailwindcss/vite --legacy-peer-deps 

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]