# Stage 1 - the build process
FROM node:18 as build-deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 - the production environment
FROM nginx
COPY ./nginx/info.conf /etc/nginx/conf.d/default.conf
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 3000 
CMD ["nginx", "-g", "daemon off;"]