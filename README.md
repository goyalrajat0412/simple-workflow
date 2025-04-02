# Simple Workflow

A simplified workflow automation tool inspired by n8n.

## Overview

This project implements a basic workflow automation engine where you can create workflows by connecting different nodes together and passing data between them.

## Features

- Create and manage workflows
- Execute workflows programmatically
- Different node types (HTTP requests, data transformations, etc.)
- Data passing between nodes

## Getting Started

### Installation

```bash
npm install
```

### Running the server

```bash
npm run dev
```

## Project Structure

- `src/core` - Core workflow engine components
- `src/nodes` - Node types for different operations
- `src/server` - Express server for the API
- `src/interfaces` - TypeScript interfaces

## License

MIT
