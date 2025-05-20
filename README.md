# Contact App Backend

Backend para una aplicación de agenda de contactos desarrollado con NestJS, MySQL/MariaDB y documentación con Swagger.

## Requisitos

- Node.js (v16 o superior)
- MySQL/MariaDB
- Heidisql (opcional para administración de la base de datos)

## Configuración

1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Crear un archivo `.env` basado en `.env.example` con tus credenciales de base de datos
4. Asegurarse que la base de datos `reingenio_db` exista en tu servidor MySQL/MariaDB

## Ejecución

```bash
# Desarrollo
npm run start:dev

# Producción
npm run build
npm run start