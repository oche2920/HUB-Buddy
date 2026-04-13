# HUB-Buddy Usage Guide

## Quick Start

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/HUB-Buddy.git
cd HUB-Buddy

# Install dependencies
bun install
```

### 2. Environment Setup

```bash
# Backend
cp apps/backend/.env.example apps/backend/.env

# Frontend
cp apps/frontend/.env.example apps/frontend/.env
```

### 3. Start Development

```bash
# Start all services
bun run dev

# Or start individually
cd apps/backend && bun run dev
cd apps/frontend && bun run dev
```

## Using Docker

```bash
# Start backend with Docker
cd apps/backend
docker-compose up

# Access the API
curl http://localhost:3001/health
```

## API Endpoints

### Health Check
```bash
GET /health
```

### Communities
```bash
GET /api/communities
```

## Frontend

Access the frontend at: http://localhost:3000

## Testing

```bash
# Run all tests
bun run test

# Run specific tests
bun test apps/backend/src/__tests__
```

## Building for Production

```bash
# Build all apps
bun run build

# Start production server
cd apps/backend && bun run start
cd apps/frontend && bun run start
```
