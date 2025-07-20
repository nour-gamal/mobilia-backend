Project Structure

📦 backend/
├── 📁 src/
│ ├── 📁 config/ # Environment variables, DB config, etc.
│ ├── 📁 routes/ # Route definitions (Express routers)
│ ├── 📁 controllers/ # Handle request/response logic
│ ├── 📁 services/ # Business logic (stateless)
│ ├── 📁 models/ # DB models (e.g., Mongoose or Prisma)
│ ├── 📁 middlewares/ # Auth, error handlers, etc.
│ ├── 📁 utils/ # Helper functions, constants, validators
│ ├── 📁 interfaces/ # TypeScript interfaces and types
│ ├── 📁 database/ # DB connection and migrations
│ ├── 📁 jobs/ # Background workers / cron jobs
│ ├── 📁 tests/ # Unit/integration tests (optional)
│ └── 📄 index.ts # App entry point
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 nodemon.json
└── 📄 .env
