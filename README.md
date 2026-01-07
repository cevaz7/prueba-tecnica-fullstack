# Prueba Técnica Full-Stack — Gestión de Productos

Aplicación full-stack para la gestión de productos que permite crear y listar productos.

## Tecnologías

### Backend
- Java 17
- Spring Boot
- Spring Data JPA
- H2 Database

### Frontend
- Vue 3
- TypeScript
- Vite
- Axios

---

## Estructura del proyecto

```text
/backend   → API REST con Spring Boot
/frontend  → Aplicación web con Vue 3 + TypeScript


Requisitos

-Java 17+
-Node.js 18+

Ejecución del Backend
En la consola
cd backend
./mvnw spring-boot:run

H2 Console:
http://localhost:8080/h2-console

JDBC URL:
jdbc:h2:mem:productosdb

Ejecución del Frontend
En la consola
cd frontend
npm install
npm run dev

La aplicación estará disponible en:
http://localhost:5173

Endpoints disponibles
| Método | Endpoint      | Descripción      |
| ------ | ------------- | ---------------- |
| GET    | /api/products | Listar productos |
| POST   | /api/products | Crear producto   |

Notas

El frontend se comunica con el backend mediante una API REST.
Se aplican validaciones en el backend.
Arquitectura basada en buenas prácticas (Controller / Service / Repository).