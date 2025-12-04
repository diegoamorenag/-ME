# Docker Configuration for Frontend

This directory contains Docker configuration files for building and running the frontend application.

## Files

- **Dockerfile**: Multi-stage build configuration that builds the React app and serves it with nginx
- **nginx.conf**: Nginx server configuration optimized for React SPA
- **.dockerignore**: Excludes unnecessary files from the Docker build context

## Building the Image

From the **project root directory** (`/home/diego/+Modulos/JOBS/ME`), run:

```bash
docker build -f docker/Dockerfile -t frontend-app:latest .
```

## Running the Container

```bash
docker run -d -p 8080:80 --name frontend-app frontend-app:latest
```

The application will be available at `http://localhost:8080`

## Docker Compose (Optional)

You can also create a `docker-compose.yml` file in the project root:

```yaml
version: "3.8"

services:
  frontend:
    build:
      context: .
      dockerfile: docker/Dockerfile
    ports:
      - "8080:80"
    restart: unless-stopped
    container_name: frontend-app
```

Then run:

```bash
docker-compose up -d
```

## Development Mode

For development with hot-reload, you can create a separate Dockerfile.dev:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ ./

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -f docker/Dockerfile.dev -t frontend-app:dev .
docker run -d -p 3000:3000 -v $(pwd)/frontend/src:/app/src --name frontend-dev frontend-app:dev
```

## Features

- **Multi-stage build**: Optimized for production with minimal image size
- **Nginx server**: Efficient static file serving
- **SPA routing**: Proper handling of client-side routes
- **Caching**: Static assets cached for 1 year
- **Security headers**: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection
- **Gzip compression**: Enabled for text-based assets
- **Health check**: Built-in container health monitoring
- **Package manager agnostic**: Works with npm, yarn, or pnpm
