# Aboriginal Art Gallery API

A RESTful API for managing an Aboriginal art museum's collection, built with Node.js, Express, Prisma, and MongoDB.

## Requirements

- Node.js
- npm
- MongoDB database

## Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/mitchbart/aboriginal_art_gallery
cd aboriginal-art-gallery
```

### 2. Install Dependencies

```bash
npm ci
```

### 3. Set Up MongoDB Database
Refer to instructions here - https://www.mongodb.com/docs/atlas/tutorial/create-new-cluster/?_ga=2.252243849.1861756039.1715571238-871408854.1714473589

### 4. Set Up Environment Variables

Create a `.env` file in the root directory using the same format seen in sample.env.txt:

```env
DATABASE_URL="mongodb://{username}:{password}@{db connection string}"
PORT=3000
JWT_SECRET="your-jwt-secret-key" // not really required for the current implementation
```

### 5. Generate Prisma Client

```bash
npx prisma generate
```

### 6. Deploy Database Schema

```bash
npx prisma db push
```

### 7. Start the Development Server

```bash
npm run dev
```
