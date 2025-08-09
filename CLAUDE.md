# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on port 3001, uses Turbopack for faster builds)
- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`

## Architecture Overview

This is a Next.js 15 application using the App Router architecture with:

- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Linting**: ESLint with Next.js core web vitals and TypeScript rules

### Project Structure

```
app/
├── api/
│   └── receive/
│       └── route.ts    # API endpoint to receive POST requests
├── layout.tsx          # Root layout with font configuration
├── page.tsx            # Home page component
└── globals.css         # Global styles and Tailwind directives
```

### Key Configuration

- **TypeScript**: ES2017 target with bundler module resolution
- **Path alias**: `@/*` maps to root directory
- **ESLint**: Extends Next.js core-web-vitals and TypeScript configurations
- **Next.js**: Uses default configuration (extensible in next.config.ts)

The application follows Next.js App Router conventions with TypeScript and includes optimized font loading using `next/font/google`.

## API Endpoints

### POST /api/receive
- **Purpose**: Receives data from external systems and stores it in an in-memory array
- **URL**: `http://localhost:3001/api/receive`
- **Method**: POST
- **Body**: JSON data (any structure)
- **Response**: `{ success: boolean, message: string, arrayLength: number }`
- **Features**: Automatically adds timestamp to received data

### GET /api/receive  
- **Purpose**: Retrieve all stored data and count
- **URL**: `http://localhost:3001/api/receive`
- **Method**: GET
- **Response**: `{ data: any[], count: number }`