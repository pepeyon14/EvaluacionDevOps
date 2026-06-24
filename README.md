# CampusFlow IA

## 1. Descripción del proyecto

CampusFlow IA es una aplicación web demostrativa desarrollada para la gestión de actividades universitarias. El sistema permite simular una plataforma institucional donde se visualizan módulos de actividades, participantes y asistencia con Inteligencia Artificial.

El proyecto fue desarrollado con un enfoque DevOps, integrando control de versiones con GitHub, validación automática mediante GitHub Actions, uso de Docker, despliegue en AWS EC2 y ejecución del servicio con PM2.

## 2. Objetivo del proyecto

Implementar una solución web sencilla que permita demostrar el flujo completo desde el desarrollo hasta producción, aplicando herramientas DevOps utilizadas durante el semestre.

El objetivo principal es evidenciar el uso de:

* Git y GitHub.
* GitHub Actions.
* ESLint.
* Prettier.
* Jest.
* Docker.
* Docker Compose.
* AWS EC2.
* PM2.
* Variables de entorno.

## 3. Funcionalidades principales

La aplicación cuenta con las siguientes vistas:

* Página de inicio.
* Inicio de sesión.
* Registro demostrativo.
* Panel principal.
* Gestión de actividades.
* Gestión de participantes.
* Asistencia con IA.
* Ruta de verificación `/health`.

El login utiliza un usuario de prueba definido para fines demostrativos.

## 4. Usuario de prueba

Para ingresar al sistema se debe utilizar el siguiente usuario:

```txt
Correo: Brunehitor@gmail.cl
Contraseña: 12345678
```

## 5. Tecnologías utilizadas

| Tecnología      | Uso dentro del proyecto                |
| --------------- | -------------------------------------- |
| Node.js         | Entorno de ejecución de JavaScript     |
| Express         | Framework para crear la aplicación web |
| EJS             | Motor de plantillas para las vistas    |
| CSS             | Estilos visuales de la aplicación      |
| Express Session | Manejo de sesión de usuario            |
| Dotenv          | Uso de variables de entorno            |
| ESLint          | Revisión de calidad de código          |
| Prettier        | Formato del código                     |
| Jest            | Pruebas automatizadas                  |
| Supertest       | Pruebas de rutas HTTP                  |
| Docker          | Creación de imagen de la aplicación    |
| Docker Compose  | Definición de servicios                |
| GitHub Actions  | Pipeline de integración continua       |
| AWS EC2         | Despliegue en la nube                  |
| PM2             | Ejecución y monitoreo del proceso      |

## 6. Estructura del proyecto

```txt
EvaluacionN4/
├── .github/
│   └── workflows/
│       └── pipeline.yml
│
├── public/
│   └── css/
│       └── styles.css
│
├── src/
│   ├── config/
│   │   └── session.js
│   │
│   ├── controllers/
│   │   └── authController.js
│   │
│   ├── middlewares/
│   │   └── authMiddleware.js
│   │
│   ├── app.js
│   └── server.js
│
├── tests/
│   └── app.test.js
│
├── views/
│   ├── actividades/
│   │   └── index.ejs
│   ├── auth/
│   │   ├── login.ejs
│   │   └── register.ejs
│   ├── ia/
│   │   └── index.ejs
│   ├── panel/
│   │   └── index.ejs
│   ├── participantes/
│   │   └── index.ejs
│   ├── partials/
│   │   └── navbar.ejs
│   └── index.ejs
│
├── .dockerignore
├── .env.example
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── eslint.config.js
├── package.json
└── package-lock.json
```

## 7. Instalación local

Para ejecutar el proyecto de forma local, primero se debe clonar el repositorio:

```bash
git clone https://github.com/pepeyon14/EvaluacionDevOps.git
```

Luego ingresar a la carpeta del proyecto:

```bash
cd EvaluacionDevOps
```

Instalar dependencias:

```bash
npm install
```

Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
PORT=3000
SESSION_SECRET=clave_super_secreta_campusflow
NODE_ENV=development
```

Ejecutar la aplicación en modo desarrollo:

```bash
npm run dev
```

La aplicación quedará disponible en:

```txt
http://localhost:3000
```

## 8. Scripts disponibles

| Comando                | Descripción                              |
| ---------------------- | ---------------------------------------- |
| `npm start`            | Ejecuta la aplicación en modo producción |
| `npm run dev`          | Ejecuta la aplicación con Nodemon        |
| `npm run lint`         | Ejecuta ESLint                           |
| `npm run format`       | Aplica formato con Prettier              |
| `npm test`             | Ejecuta pruebas automatizadas            |
| `npm run docker:build` | Construye la imagen Docker               |

## 9. Pruebas automatizadas

El proyecto incluye pruebas automatizadas con Jest y Supertest.

Para ejecutar las pruebas:

```bash
npm test
```

Las pruebas validan rutas principales como:

* `/`
* `/login`
* `/health`

## 10. Calidad de código

El proyecto utiliza ESLint para revisar errores de estilo y buenas prácticas.

Para ejecutar ESLint:

```bash
npm run lint
```

También se utiliza Prettier para mantener el formato del código:

```bash
npm run format
```

## 11. Docker

El proyecto incluye un `Dockerfile` para construir una imagen de la aplicación.

Para construir la imagen:

```bash
docker build -t campusflow-ia .
```

Para ejecutar el contenedor manualmente:

```bash
docker run -p 3000:3000 campusflow-ia
```

## 12. Docker Compose

El proyecto incluye un archivo `docker-compose.yml` para levantar servicios definidos en contenedores.

Para ejecutar con Docker Compose:

```bash
docker compose up --build
```

La aplicación queda disponible en:

```txt
http://localhost:3000
```

## 13. Pipeline CI/CD con GitHub Actions

El proyecto incluye un pipeline ubicado en:

```txt
.github/workflows/pipeline.yml
```

El pipeline ejecuta automáticamente las siguientes etapas:

1. Descarga del código del repositorio.
2. Configuración de Node.js.
3. Instalación de dependencias.
4. Ejecución de ESLint.
5. Ejecución de pruebas con Jest.
6. Construcción de imagen Docker.

Este flujo permite validar que el proyecto mantenga calidad de código, pruebas funcionales y construcción correcta antes de avanzar a producción.

## 14. Despliegue en AWS EC2

La aplicación fue desplegada en una instancia EC2 de AWS Academy utilizando Amazon Linux 2023.

Pasos generales realizados:

```bash
sudo dnf update -y
sudo dnf install -y git nodejs npm
sudo npm install -g pm2
git clone https://github.com/pepeyon14/EvaluacionDevOps.git
cd EvaluacionDevOps
npm install
nano .env
pm2 start src/server.js --name campusflow-ia --update-env
pm2 status
```

La aplicación se ejecuta en el puerto:

```txt
3000
```

El acceso se realiza mediante la IP pública de la instancia:

```txt
http://IP_PUBLICA:3000
```

## 15. PM2 y monitoreo básico

PM2 se utilizó para mantener la aplicación ejecutándose en segundo plano dentro de la instancia EC2.

Comandos principales:

```bash
pm2 start src/server.js --name campusflow-ia
pm2 status
pm2 logs campusflow-ia
pm2 save
```

Con PM2 se puede verificar el estado de la aplicación, revisar logs y mantener el proceso activo.

## 16. Variables de entorno

El proyecto utiliza variables de entorno para separar configuraciones del código fuente.

Archivo de ejemplo:

```env
PORT=3000
SESSION_SECRET=cambia_esta_clave_en_produccion
NODE_ENV=production
```

El archivo `.env` real no debe subirse al repositorio. Para esto se utiliza `.gitignore`.

## 17. Seguridad aplicada

Medidas consideradas:

* Uso de `.gitignore` para evitar subir `.env`.
* Uso de `.env.example` como plantilla sin datos sensibles.
* Configuración de variables de entorno.
* Uso de Security Group en AWS para habilitar solo los puertos necesarios.
* Acceso a la aplicación mediante puerto 3000.
* Separación entre código fuente y configuración.

## 18. Ruta de verificación

La aplicación incluye una ruta de salud del sistema:

```txt
/health
```

Respuesta esperada:

```json
{
  "status": "ok",
  "message": "Aplicación funcionando correctamente"
}
```

Esta ruta permite comprobar rápidamente que el servicio está activo.

## 19. Estado del proyecto

El proyecto se encuentra funcional y desplegado en AWS EC2. Además, cuenta con pipeline de GitHub Actions ejecutado correctamente, pruebas automatizadas, revisión de código, Dockerfile y ejecución con PM2.

## 20. Autor

Proyecto académico desarrollado para la actividad evaluada N°4 de DevOps: del Desarrollo a Producción.
