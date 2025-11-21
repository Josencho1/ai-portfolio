# Running Expense Tracker with Docker

This guide explains how to run the Expense Tracker application using Docker.

## Prerequisites

- Docker installed on your system ([Install Docker](https://docs.docker.com/get-docker/))
- Docker Compose (usually included with Docker Desktop)

## Quick Start

### Option 1: Using Docker Compose (Recommended)

1. **Navigate to the project directory:**
   ```bash
   cd expense-tracker
   ```

2. **Build and start the container:**
   ```bash
   docker-compose up --build
   ```

3. **Access the application:**
   Open your browser and go to [http://localhost:3000](http://localhost:3000)

4. **Stop the application:**
   Press `Ctrl + C` or run:
   ```bash
   docker-compose down
   ```

### Option 2: Using Docker Commands

1. **Navigate to the project directory:**
   ```bash
   cd expense-tracker
   ```

2. **Build the Docker image:**
   ```bash
   docker build -t expense-tracker .
   ```

3. **Run the container:**
   ```bash
   docker run -p 3000:3000 --name expense-tracker expense-tracker
   ```

4. **Access the application:**
   Open your browser and go to [http://localhost:3000](http://localhost:3000)

5. **Stop the container:**
   ```bash
   docker stop expense-tracker
   ```

6. **Remove the container:**
   ```bash
   docker rm expense-tracker
   ```

## Advanced Usage

### Running in Detached Mode

Run the container in the background:

```bash
docker-compose up -d
```

### View Logs

```bash
docker-compose logs -f expense-tracker
```

### Using a Different Port

If port 3000 is already in use, you can change it in `docker-compose.yml`:

```yaml
ports:
  - "8080:3000"  # Access via http://localhost:8080
```

Or with Docker command:

```bash
docker run -p 8080:3000 --name expense-tracker expense-tracker
```

### Rebuild After Code Changes

```bash
docker-compose up --build
```

Or:

```bash
docker build -t expense-tracker . --no-cache
docker run -p 3000:3000 --name expense-tracker expense-tracker
```

## Docker Image Details

The Dockerfile uses a multi-stage build process:

1. **Builder Stage**:
   - Uses Node.js 18 Alpine
   - Installs dependencies
   - Builds the Next.js application

2. **Runner Stage**:
   - Uses a minimal Node.js 18 Alpine image
   - Copies only necessary production files
   - Results in a smaller, optimized image

### Image Size

The final image is optimized for production and should be around 200-300MB.

## Troubleshooting

### Port Already in Use

If you get a "port already in use" error:

```bash
# Find what's using port 3000
lsof -i :3000  # Mac/Linux
netstat -ano | findstr :3000  # Windows

# Use a different port
docker run -p 3001:3000 --name expense-tracker expense-tracker
```

### Build Fails

If the build fails, try:

```bash
# Clean up Docker cache
docker system prune -a

# Rebuild without cache
docker build --no-cache -t expense-tracker .
```

### Container Won't Start

Check the logs:

```bash
docker logs expense-tracker
```

### Remove All Containers and Images

To completely clean up:

```bash
# Stop and remove container
docker-compose down

# Remove image
docker rmi expense-tracker

# Or remove all unused Docker resources
docker system prune -a
```

## Production Deployment

For production deployment to cloud platforms:

### Deploy to Docker Hub

```bash
# Tag the image
docker tag expense-tracker yourusername/expense-tracker:latest

# Push to Docker Hub
docker push yourusername/expense-tracker:latest
```

### Deploy to Cloud Platforms

- **AWS ECS/Fargate**: Use the Docker image with ECS task definitions
- **Google Cloud Run**: Deploy directly from the Dockerfile
- **Azure Container Instances**: Deploy the Docker image
- **DigitalOcean App Platform**: Connect your repository with Dockerfile

## Environment Variables

Currently, the app doesn't require environment variables as it uses localStorage. However, you can add them in `docker-compose.yml`:

```yaml
environment:
  - NODE_ENV=production
  - NEXT_PUBLIC_API_URL=https://api.example.com
```

Or in Docker command:

```bash
docker run -p 3000:3000 -e NODE_ENV=production --name expense-tracker expense-tracker
```

## Data Persistence

**Important**: Data is stored in the browser's localStorage, not in the Docker container. This means:

- Data persists across browser sessions
- Data is tied to the user's browser
- Restarting the container won't affect stored data
- Each user has their own data

To add backend storage in the future, you could:
- Add a database service to `docker-compose.yml`
- Use Docker volumes for persistent storage
- Connect to an external database service

## Performance

The containerized application should perform similarly to running it locally:

- **Cold start**: ~2-3 seconds
- **Hot reload**: Not available (development feature only)
- **Memory usage**: ~100-150MB
- **CPU usage**: Minimal when idle

## Security

The production image:
- Uses non-root user (Node.js Alpine default)
- Only includes necessary production files
- Uses minimal Alpine Linux base
- No development dependencies included

For additional security, consider:
- Using Docker secrets for sensitive data
- Running behind a reverse proxy (nginx/traefik)
- Implementing rate limiting
- Adding HTTPS with SSL certificates

## Next Steps

- Set up CI/CD pipeline with GitHub Actions
- Deploy to a cloud platform
- Add database for multi-user support
- Implement authentication
- Set up monitoring and logging
