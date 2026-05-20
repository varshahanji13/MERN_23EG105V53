# Blog App Frontend

A React + Vite frontend for the Blog App project, built with Tailwind CSS, React Router, Zustand, Axios, and React Hook Form.

## Project Overview

The frontend is the client-side interface for a blog application. It is responsible for:
- displaying articles and article details
- authenticating users and maintaining sessions
- providing role-based access for readers, authors, and admins
- enabling authors to create and edit articles
- communicating with the backend API using Axios
- handling client-side routing and protected pages

## How It Works

- `src/components/` holds page components and reusable UI pieces.
- `src/store/authStore.js` stores authentication state and manages login/logout flows.
- React Router controls navigation and applies route protection with `ProtectedRoute.jsx`.
- Axios sends requests to the backend API for articles, comments, registration, login, and profile data.
- Zustand keeps the current user and auth state in a lightweight store.
- Tailwind CSS provides the visual layout and responsive styling.

## Deployment

The frontend is configured for Vercel deployment. The current production deployment is:

https://blogappproject-hazel.vercel.app

The file `vercel.json` is used to rewrite all routes to `index.html`, which enables client-side routing on refresh.

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- React Router 7
- Zustand
- Axios
- React Hook Form
- ESLint

## Getting Started

### Requirements

- Node.js 18+ (or compatible LTS version)
- npm or yarn

### Install dependencies

```bash
cd Frontend
npm install
```

### Packages

| Package | Command |
| --- | --- |
| React | `npm install react` |
| React DOM | `npm install react-dom` |
| Axios | `npm install axios` |
| React Hook Form | `npm install react-hook-form` |
| React Hot Toast | `npm install react-hot-toast` |
| React Router | `npm install react-router` |
| Zustand | `npm install zustand` |
| Tailwind CSS | `npm install tailwindcss` |
| Tailwind CSS Vite Plugin | `npm install @tailwindcss/vite` |

### Run locally

```bash
npm run dev
```

Open the local server URL shown in the terminal, usually `http://localhost:5173`.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint source files

```bash
npm run lint
```

## Project Structure

- `public/` - static public files and assets
- `src/` - React application code
  - `components/` - page components and UI elements
  - `store/` - Zustand authentication store
  - `styles/` - shared styling helpers
- `package.json` - frontend dependencies and scripts
- `vite.config.js` - Vite build configuration
- `vercel.json` - Vercel routing configuration
- `index.html` - app entry template

## Environment Variables

The frontend can use Vite environment variables for configurable values such as API endpoints.

Create a `.env` or `.env.local` file in the `Frontend/` directory and add:

```env
VITE_API_BASE_URL=https://blogapp-0y0w.onrender.com
```

Then update Axios requests in the code to use `import.meta.env.VITE_API_BASE_URL` instead of hardcoded URLs.

Example:

```js
const apiUrl = import.meta.env.VITE_API_BASE_URL;
await axios.get(`${apiUrl}/user-api/articles`, { withCredentials: true });
```

## Notes

- The backend API lives in the `Backend/` directory at the root of the workspace.
- If you change the backend host or deployment URL, update the env variable and any hardcoded API calls.
- Use Vercel for static deployment and review `vercel.json` for route rewriting.

## License

This project is provided as-is for development and learning purposes.
