# Usa una imagen base liviana de Node.js versión 20
FROM node:20-alpine

# Define la carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto al contenedor
COPY . .

# Expone el puerto 3000, que es donde corre la aplicación
EXPOSE 3000

# Comando que se ejecuta al iniciar el contenedor
CMD ["npm", "start"]