# Retro Pokédex – Client (React + Vite)

Aplicación web tipo Pokédex con estética retro, construida con **React + Vite**.  
Permite explorar Pokémon, buscar por nombre, filtrar por tipo, marcar favoritos, ver estadísticas básicas y añadir comentarios asociados a cada Pokémon.

---

## ✨ Funcionalidades principales

- **Landing retro** con acceso rápido a la Pokédex.
- **Listado de Pokémon**:
  - Paginación (20 por página).
  - **Buscador por nombre**.
  - **Filtro por tipo** (con página específica de tipos).
- **Ficha detallada de cada Pokémon**:
  - Imagen y datos básicos.
  - **Stats** visualizados con barras horizontales.
  - Botón de **favorito** (corazón) gestionado por contexto global.
  - Sección de **comentarios** conectada al backend (`/chats`).
- **Gestión de favoritos**:
  - Añadir/quitar Pokémon favoritos desde la ficha.
  - Estado global mediante `FavoritesContext`.
- **Modo claro/oscuro**:
  - Interruptor con iconos de sol y luna.
  - Gestión del tema a través de `ThemeContext` y clases en `<body>`.
- **Manejo de rutas con React Router**:
  - `/` – Landing (Dashboard).
  - `/pokemons` – Listado de Pokémon.
  - `/pokemon/:pokemonCharacterId` – Detalle de Pokémon.
  - `/types` – Página de filtro por tipos.
  - `/about` – Página About.
  - `*` – Página 404.

---

## 🧱 Tecnologías utilizadas

- **Frontend**:
  - [React 18](https://react.dev/)
  - [Vite](https://vitejs.dev/)
  - [React Router DOM](https://reactrouter.com/)
  - [Axios](https://axios-http.com/)
  - [Bootstrap 5](https://getbootstrap.com/) (para estilos base y layout)
- **Estado & contexto**:
  - `FavoritesContext` para favoritos.
  - `ThemeContext` para modo claro/oscuro.
- **API Pokémon**:
  - [PokeAPI](https://pokeapi.co/) (a través de `VITE_BACKEND_URL`).

---

## 🌐 Arquitectura de datos

La app consume datos de dos orígenes:

1. **PokeAPI** (Pokémon, tipos, etc.)
   - Base URL configurada en `VITE_BACKEND_URL`.
   - Implementado en `src/services/pokeapi.js`:
     - `GET /pokemon?limit=&offset=`
     - `GET /pokemon/:name`
     - `GET /type`

2. **Backend propio de comentarios** (JSON Server)
   - Base URL configurada en `VITE_SERVER_URL`.
   - Usado en los componentes de comentarios:
     - `POST /chats` para crear comentarios.
     - `GET /chats?pokemonId=...` para listar comentarios de un Pokémon.
     - `DELETE /chats/:id` para eliminar un comentario.

---

## ⚙️ Variables de entorno

Crear un archivo `.env.local` en la raíz del proyecto (ya existe en este repo, pero a modo de referencia):

```bash
VITE_BACKEND_URL="https://pokeapi.co/api/v2"
VITE_SERVER_URL="http://localhost:5005"
