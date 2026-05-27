# Computer Parts Ecommerce (Full Stack)

Monorepo with Next.js frontend + Express backend + MongoDB.

## Setup
1. `npm install`
2. copy env files:
   - `cp backend/.env.example backend/.env`
   - `cp frontend/.env.example frontend/.env.local`
3. run mongodb and then seed data:
   - `npm run seed -w backend`
4. start:
   - `npm run dev`

## Deploy
- Frontend: Vercel
- Backend: Render/Railway
- MongoDB: Atlas
- Images: Cloudinary
