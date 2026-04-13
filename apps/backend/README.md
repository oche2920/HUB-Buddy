# HUB-Buddy Backend

Backend API server for HUB-Buddy platform.

## Setup

1. Install dependencies:
```bash
bun install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Start development server:
```bash
bun run dev
```

## API Endpoints

- `GET /health` - Health check
- `GET /api/communities` - List communities

## Docker Setup

```bash
docker-compose up
```
