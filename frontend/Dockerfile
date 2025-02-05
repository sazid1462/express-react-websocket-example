FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY public ./public
COPY src ./src

RUN npm run build

# Production environment
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
