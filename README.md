# Express React WebSocket Demo with TypeScript

This is a full-stack TypeScript application demonstrating the integration of Express.js backend with React frontend, featuring REST API and WebSocket communication.

## Features

- Express.js backend with TypeScript
  - Typed REST API endpoints
  - WebSocket server with typed events
  - Clean architecture with proper interfaces
- React frontend with TypeScript
  - Strongly typed components and hooks
  - Type-safe API integration
  - Real-time WebSocket communication
- Docker configuration for easy deployment

## Running the Application

You can run both the frontend and backend services using Docker Compose:

```bash
docker-compose up
```

The application will be available at:
- Frontend: http://localhost:3001
- Backend: http://localhost:5001

## Architecture

- Backend (Express.js + TypeScript):
  - REST API endpoint at `/hello`
  - WebSocket server broadcasting notifications every 5 minutes
  - Running on port 5001
  - Type-safe request/response handling

- Frontend (React + TypeScript):
  - Displays message from `/hello` endpoint
  - Shows real-time notifications from WebSocket
  - Running on port 3001
  - Type-safe component props and state

## Development

The project uses Docker volumes for development, so any changes you make to the source code will be reflected immediately in the running application.

### Backend Development

```bash
cd backend
npm install
npm run dev  # Runs TypeScript in watch mode
```

### Frontend Development

```bash
cd frontend
npm install
npm start
