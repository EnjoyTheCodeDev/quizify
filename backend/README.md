## Getting Started

```bash
cd backend

echo 'PORT=3001
DATABASE_URL="file:./dev.db"
FRONTEND_URL="http://localhost:3000"' > .env

npm install

npx prisma migrate dev --name init

npm run dev
```
