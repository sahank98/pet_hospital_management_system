# Pet Hospital Management System - Complete Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [System Architecture](#system-architecture)
4. [Project Structure](#project-structure)
5. [Database Schema](#database-schema)
6. [API Endpoints](#api-endpoints)
7. [Features & Modules](#features--modules)
8. [Security & Compliance](#security--compliance)
9. [Implementation Roadmap](#implementation-roadmap)
10. [Setup Instructions](#setup-instructions)

---

## Project Overview

### Purpose
A comprehensive pet hospital management system designed to streamline all operations including appointments, medical records, billing, inventory, and client management.

### Target Users
- **Veterinarians**: Access medical records, prescribe treatments
- **Receptionists**: Manage appointments, check-ins, billing
- **Administrators**: Oversee operations, generate reports, manage staff
- **Pet Owners**: View appointments, access pet records, make payments

### Key Objectives
- Digitize all hospital operations
- Improve appointment scheduling efficiency
- Maintain comprehensive medical records
- Streamline billing and inventory management
- Enhance client communication

---

## Technology Stack

### Core Stack
- **Backend**: Node.js v18+ with Express.js
- **Frontend**: React.js 18+ with TypeScript
- **Database**: PostgreSQL 15+
- **ORM**: Prisma
- **API Documentation**: Swagger/OpenAPI with Apidog

### Frontend Technologies
- **State Management**: Zustand
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router v7
- **HTTP Client**: Axios
- **Charts**: Recharts
- **Form Validation**: React Hook Form + Zod
- **Date Handling**: date-fns
- **PDF Generation**: pdfmake (client-side)
- **Testing**: React Testing Library + Vitest
- **Internationalization**: i18next (optional)

### Backend Technologies
- **Authentication**: JWT (jsonwebtoken)
- **File Storage**: Cloudinary
- **Validation**: Zod
- **Email**: Nodemailer + SendGrid/AWS SES
- **SMS**: Twilio (optional)
- **Caching**: Redis
- **Real-time**: Socket.io
- **Security**: Helmet, express-rate-limit, cors
- **Logging**: Morgan + Winston
- **Testing**: Jest + Supertest
- **Authorization**: CASL or accesscontrol

### Development Tools
- **Code Quality**: ESLint, Prettier
- **Git Hooks**: Husky + lint-staged
- **Commit Convention**: Commitlint
- **Version Control**: GitHub
- **Project Management**: ClickUp
- **Design**: Figma + Excalidraw
- **Environment**: dotenv
- **Error Tracking**: Sentry

### DevOps & Deployment
- **Containerization**: Docker + Docker Compose
- **CI/CD**: GitHub Actions
- **Hosting Options**: AWS, DigitalOcean, or Render
- **Database Backups**: Automated pg_dump scripts

---

## System Architecture

### Architecture Pattern
**Layered Architecture (MVC + Service Layer)**

```
┌─────────────────────────────────────┐
│         React Frontend              │
│  (Components, Pages, State)         │
└──────────────┬──────────────────────┘
               │ HTTP/WebSocket
┌──────────────▼──────────────────────┐
│         API Gateway/Router          │
│     (Express Routes + Middleware)   │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│        Controller Layer             │
│   (Request/Response Handling)       │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│         Service Layer               │
│     (Business Logic)                │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│      Repository/Data Layer          │
│         (Prisma ORM)                │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│       PostgreSQL Database           │
└─────────────────────────────────────┘

External Services:
- Cloudinary (File Storage)
- Redis (Caching)
- SendGrid/SES (Email)
- Twilio (SMS)
```

---

## Project Structure

### Root Structure
```
pet-hospital-management/
├── backend/
├── frontend/
├── docker-compose.yml
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── cd.yml
├── docs/
│   ├── api/
│   ├── architecture/
│   └── user-guides/
└── README.md
```

### Backend Structure
```
backend/
├── src/
│   ├── config/
│   │   ├── database.ts
│   │   ├── redis.ts
│   │   ├── cloudinary.ts
│   │   └── environment.ts
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   ├── validation.middleware.ts
│   │   ├── rateLimiter.middleware.ts
│   │   └── audit.middleware.ts
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.routes.ts
│   │   │   ├── auth.schema.ts
│   │   │   └── auth.test.ts
│   │   ├── users/
│   │   │   ├── users.controller.ts
│   │   │   ├── users.service.ts
│   │   │   ├── users.routes.ts
│   │   │   ├── users.schema.ts
│   │   │   └── users.test.ts
│   │   ├── pets/
│   │   ├── appointments/
│   │   ├── medical-records/
│   │   ├── billing/
│   │   ├── inventory/
│   │   ├── notifications/
│   │   └── reports/
│   ├── shared/
│   │   ├── types/
│   │   ├── constants/
│   │   ├── utils/
│   │   └── helpers/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   ├── migrations/
│   │   └── seed.ts
│   ├── services/
│   │   ├── email.service.ts
│   │   ├── sms.service.ts
│   │   ├── file.service.ts
│   │   ├── cache.service.ts
│   │   └── pdf.service.ts
│   ├── websockets/
│   │   ├── socket.handler.ts
│   │   └── notifications.socket.ts
│   ├── app.ts
│   └── server.ts
├── tests/
│   ├── integration/
│   ├── unit/
│   └── setup.ts
├── .env.example
├── .eslintrc.js
├── .prettierrc
├── jest.config.js
├── tsconfig.json
└── package.json
```

### Frontend Structure
```
frontend/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── common/
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   └── features/
│   │       ├── appointments/
│   │       ├── pets/
│   │       ├── medical-records/
│   │       └── billing/
│   ├── pages/
│   │   ├── Dashboard/
│   │   ├── Appointments/
│   │   ├── Pets/
│   │   ├── MedicalRecords/
│   │   ├── Billing/
│   │   ├── Inventory/
│   │   ├── Users/
│   │   ├── Reports/
│   │   ├── Settings/
│   │   ├── Login/
│   │   └── NotFound/
│   ├── store/
│   │   ├── authStore.ts
│   │   ├── appointmentStore.ts
│   │   ├── petStore.ts
│   │   └── notificationStore.ts
│   ├── services/
│   │   ├── api.service.ts
│   │   ├── auth.service.ts
│   │   ├── appointments.service.ts
│   │   ├── pets.service.ts
│   │   └── socket.service.ts
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useDebounce.ts
│   │   └── usePermissions.ts
│   ├── utils/
│   │   ├── validators.ts
│   │   ├── formatters.ts
│   │   └── constants.ts
│   ├── types/
│   │   └── index.ts
│   ├── routes/
│   │   ├── index.tsx
│   │   ├── PrivateRoute.tsx
│   │   └── PublicRoute.tsx
│   ├── App.tsx
│   └── main.tsx
├── public/
├── tests/
│   ├── components/
│   └── setup.ts
├── .env.example
├── .eslintrc.js
├── .prettierrc
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Database Schema

### Core Tables

#### users
```sql
- id (UUID, PK)
- email (VARCHAR, UNIQUE)
- password_hash (VARCHAR)
- first_name (VARCHAR)
- last_name (VARCHAR)
- phone (VARCHAR)
- role (ENUM: ADMIN, VET, RECEPTIONIST, OWNER)
- avatar_url (VARCHAR)
- is_active (BOOLEAN)
- email_verified (BOOLEAN)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

#### pet_owners
```sql
- id (UUID, PK)
- user_id (UUID, FK -> users)
- address (TEXT)
- city (VARCHAR)
- state (VARCHAR)
- postal_code (VARCHAR)
- emergency_contact (VARCHAR)
- preferred_contact_method (ENUM)
```

#### pets
```sql
- id (UUID, PK)
- owner_id (UUID, FK -> pet_owners)
- name (VARCHAR)
- species (VARCHAR)
- breed (VARCHAR)
- date_of_birth (DATE)
- gender (ENUM: MALE, FEMALE)
- color (VARCHAR)
- weight (DECIMAL)
- microchip_id (VARCHAR, UNIQUE)
- photo_url (VARCHAR)
- is_active (BOOLEAN)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

#### appointments
```sql
- id (UUID, PK)
- pet_id (UUID, FK -> pets)
- vet_id (UUID, FK -> users)
- appointment_date (TIMESTAMP)
- duration_minutes (INTEGER)
- appointment_type (ENUM: CHECKUP, VACCINATION, SURGERY, EMERGENCY)
- status (ENUM: SCHEDULED, CONFIRMED, IN_PROGRESS, COMPLETED, CANCELLED)
- reason (TEXT)
- notes (TEXT)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

#### medical_records
```sql
- id (UUID, PK)
- pet_id (UUID, FK -> pets)
- appointment_id (UUID, FK -> appointments)
- vet_id (UUID, FK -> users)
- diagnosis (TEXT)
- symptoms (TEXT)
- treatment (TEXT)
- prescriptions (JSONB)
- notes (TEXT)
- attachments (JSONB) # URLs of files
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

#### vaccinations
```sql
- id (UUID, PK)
- pet_id (UUID, FK -> pets)
- medical_record_id (UUID, FK -> medical_records)
- vaccine_name (VARCHAR)
- administered_date (DATE)
- next_due_date (DATE)
- administered_by (UUID, FK -> users)
- batch_number (VARCHAR)
- notes (TEXT)
```

#### prescriptions
```sql
- id (UUID, PK)
- medical_record_id (UUID, FK -> medical_records)
- medication_name (VARCHAR)
- dosage (VARCHAR)
- frequency (VARCHAR)
- duration_days (INTEGER)
- instructions (TEXT)
- refills_allowed (INTEGER)
```

#### invoices
```sql
- id (UUID, PK)
- appointment_id (UUID, FK -> appointments)
- owner_id (UUID, FK -> pet_owners)
- invoice_number (VARCHAR, UNIQUE)
- subtotal (DECIMAL)
- tax (DECIMAL)
- discount (DECIMAL)
- total_amount (DECIMAL)
- status (ENUM: PENDING, PAID, OVERDUE, CANCELLED)
- payment_method (VARCHAR)
- payment_date (TIMESTAMP)
- due_date (DATE)
- notes (TEXT)
- created_at (TIMESTAMP)
```

#### invoice_items
```sql
- id (UUID, PK)
- invoice_id (UUID, FK -> invoices)
- item_type (ENUM: SERVICE, MEDICATION, PRODUCT)
- description (VARCHAR)
- quantity (INTEGER)
- unit_price (DECIMAL)
- total_price (DECIMAL)
```

#### inventory
```sql
- id (UUID, PK)
- item_name (VARCHAR)
- category (ENUM: MEDICATION, EQUIPMENT, SUPPLIES)
- sku (VARCHAR, UNIQUE)
- quantity (INTEGER)
- unit (VARCHAR)
- reorder_level (INTEGER)
- unit_price (DECIMAL)
- supplier (VARCHAR)
- expiry_date (DATE)
- location (VARCHAR)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

#### audit_logs
```sql
- id (UUID, PK)
- user_id (UUID, FK -> users)
- action (VARCHAR)
- resource_type (VARCHAR)
- resource_id (VARCHAR)
- old_values (JSONB)
- new_values (JSONB)
- ip_address (VARCHAR)
- user_agent (TEXT)
- created_at (TIMESTAMP)
```

#### notifications
```sql
- id (UUID, PK)
- user_id (UUID, FK -> users)
- type (ENUM: APPOINTMENT, REMINDER, ALERT, MESSAGE)
- title (VARCHAR)
- message (TEXT)
- is_read (BOOLEAN)
- action_url (VARCHAR)
- created_at (TIMESTAMP)
```

---

## API Endpoints

### Base URL
```
/api/v1
```

### Authentication
```
POST   /auth/register
POST   /auth/login
POST   /auth/logout
POST   /auth/refresh-token
POST   /auth/forgot-password
POST   /auth/reset-password
GET    /auth/verify-email/:token
```

### Users
```
GET    /users              # List all users (admin only)
GET    /users/:id          # Get user details
PUT    /users/:id          # Update user
DELETE /users/:id          # Delete user (soft delete)
PATCH  /users/:id/password # Change password
GET    /users/me           # Get current user profile
```

### Pet Owners
```
GET    /pet-owners
POST   /pet-owners
GET    /pet-owners/:id
PUT    /pet-owners/:id
DELETE /pet-owners/:id
GET    /pet-owners/:id/pets
```

### Pets
```
GET    /pets
POST   /pets
GET    /pets/:id
PUT    /pets/:id
DELETE /pets/:id
GET    /pets/:id/medical-history
GET    /pets/:id/appointments
POST   /pets/:id/photo     # Upload pet photo
```

### Appointments
```
GET    /appointments
POST   /appointments
GET    /appointments/:id
PUT    /appointments/:id
DELETE /appointments/:id
PATCH  /appointments/:id/status
GET    /appointments/available-slots
GET    /appointments/upcoming
GET    /appointments/calendar
```

### Medical Records
```
GET    /medical-records
POST   /medical-records
GET    /medical-records/:id
PUT    /medical-records/:id
DELETE /medical-records/:id
POST   /medical-records/:id/attachments
GET    /medical-records/pet/:petId
```

### Vaccinations
```
GET    /vaccinations
POST   /vaccinations
GET    /vaccinations/:id
PUT    /vaccinations/:id
DELETE /vaccinations/:id
GET    /vaccinations/pet/:petId
GET    /vaccinations/due-soon
```

### Prescriptions
```
GET    /prescriptions
POST   /prescriptions
GET    /prescriptions/:id
PUT    /prescriptions/:id
DELETE /prescriptions/:id
GET    /prescriptions/pet/:petId
```

### Billing/Invoices
```
GET    /invoices
POST   /invoices
GET    /invoices/:id
PUT    /invoices/:id
DELETE /invoices/:id
PATCH  /invoices/:id/payment
GET    /invoices/overdue
POST   /invoices/:id/send-email
GET    /invoices/:id/pdf
```

### Inventory
```
GET    /inventory
POST   /inventory
GET    /inventory/:id
PUT    /inventory/:id
DELETE /inventory/:id
GET    /inventory/low-stock
POST   /inventory/:id/adjust
GET    /inventory/expiring-soon
```

### Reports
```
GET    /reports/revenue
GET    /reports/appointments
GET    /reports/inventory
GET    /reports/patients
POST   /reports/custom
GET    /reports/export/:type
```

### Notifications
```
GET    /notifications
GET    /notifications/:id
PATCH  /notifications/:id/read
PATCH  /notifications/mark-all-read
DELETE /notifications/:id
```

### Dashboard
```
GET    /dashboard/stats
GET    /dashboard/recent-activities
GET    /dashboard/upcoming-appointments
```

---

## Features & Modules

### 1. Authentication & Authorization
- User registration with email verification
- Login with JWT tokens
- Role-based access control (RBAC)
- Password reset functionality
- Session management with Redis
- OAuth integration (Google, Facebook) - Optional

### 2. User Management
- Create/edit/delete users
- Assign roles and permissions
- User profile management
- Activity tracking

### 3. Pet Owner Portal
- Register and manage pet profiles
- View appointment history
- Access medical records
- Make online payments
- Receive notifications

### 4. Pet Management
- Add/edit pet profiles
- Upload pet photos
- Track medical history
- Vaccination records
- Microchip information

### 5. Appointment Scheduling
- Calendar view with availability
- Book/reschedule/cancel appointments
- Automated reminders (email/SMS)
- Recurring appointments
- Walk-in management
- Waitlist functionality

### 6. Medical Records
- Create comprehensive medical records
- Attach files (X-rays, lab results)
- Prescription management
- Treatment plans
- Historical tracking
- Search and filter

### 7. Billing & Invoicing
- Generate invoices
- Track payments
- Multiple payment methods
- Overdue tracking
- Automated reminders
- Receipt generation (PDF)
- Refund management

### 8. Inventory Management
- Track medications and supplies
- Low stock alerts
- Expiry date tracking
- Supplier management
- Purchase orders
- Usage reports

### 9. Reporting & Analytics
- Revenue reports
- Appointment statistics
- Patient demographics
- Inventory reports
- Custom report builder
- Export to CSV/PDF

### 10. Notifications
- Real-time in-app notifications
- Email notifications
- SMS reminders (optional)
- Appointment reminders
- Payment reminders
- Vaccination due dates

### 11. Settings & Configuration
- Hospital profile
- Business hours
- Service types and pricing
- Email templates
- Notification preferences
- System settings

---

## Security & Compliance

### Authentication Security
- Password hashing with bcrypt (12+ rounds)
- JWT with short expiration (15 minutes access, 7 days refresh)
- HTTP-only cookies for refresh tokens
- CSRF protection

### Authorization
- Role-based access control
- Permission-based actions
- Resource ownership validation
- API rate limiting per user/role

### Data Security
- SQL injection prevention (Prisma parameterized queries)
- XSS protection (input sanitization)
- CORS configuration
- Helmet.js security headers
- Request size limits
- File upload validation

### Compliance
- HIPAA considerations for medical data
- GDPR compliance (data privacy, right to deletion)
- Audit logging for all sensitive operations
- Data retention policies
- Consent management

### Backup & Recovery
- Automated daily database backups
- Point-in-time recovery setup
- Backup encryption
- Disaster recovery plan
- Regular backup testing

### Monitoring
- Error tracking with Sentry
- Performance monitoring
- Security event logging
- Failed login attempt tracking
- Suspicious activity alerts

---

## Implementation Roadmap

### Phase 1: Foundation (Weeks 1-3)
**Goal**: Setup development environment and core infrastructure

#### Week 1: Project Setup
- Initialize Git repository
- Setup monorepo structure
- Configure ESLint, Prettier, Husky
- Create Docker development environment
- Setup PostgreSQL and Redis containers
- Initialize Prisma and create initial schema
- Configure environment variables
- Setup GitHub repository and branch protection

#### Week 2: Backend Core
- Setup Express server with TypeScript
- Implement middleware (error handling, logging, security)
- Create authentication system (register, login, JWT)
- Implement password hashing and validation
- Setup Swagger/OpenAPI documentation
- Create user management endpoints
- Implement audit logging
- Write unit tests for auth

#### Week 3: Frontend Foundation
- Initialize React + TypeScript + Vite
- Setup Tailwind CSS and shadcn/ui
- Configure React Router v7
- Implement Zustand stores
- Create authentication flow (login, register)
- Build layout components (Header, Sidebar, Footer)
- Setup Axios interceptors
- Create protected routes

**Deliverables**: Working authentication system, basic UI structure, CI/CD pipeline

---

### Phase 2: Core Modules (Weeks 4-7)

#### Week 4: User & Pet Management
- Complete user CRUD operations
- Implement RBAC with CASL
- Create pet owner registration
- Build pet profile management
- Implement file upload (Cloudinary)
- Create user and pet list views
- Add search and filtering
- Write integration tests

#### Week 5: Appointment System
- Design appointment schema
- Create appointment booking API
- Implement availability checking
- Build calendar component
- Add appointment CRUD operations
- Implement appointment status workflow
- Create appointment list and detail views
- Add real-time updates with Socket.io

#### Week 6: Medical Records
- Create medical records schema
- Implement medical record CRUD
- Add file attachment support
- Build vaccination tracking
- Create prescription management
- Design medical history view
- Implement search and filtering
- Add PDF export for records

#### Week 7: Testing & Refinement
- Complete unit tests for all modules
- Write integration tests
- Perform security audit
- Fix bugs and issues
- Optimize database queries
- Add loading states and error handling
- Improve UI/UX based on feedback

**Deliverables**: Working appointment, pet, and medical record modules

---

### Phase 3: Business Operations (Weeks 8-10)

#### Week 8: Billing System
- Design invoice schema
- Create invoice generation API
- Implement payment tracking
- Build invoice list and detail views
- Add payment recording
- Create receipt generation (PDF)
- Implement overdue tracking
- Add payment reminders

#### Week 9: Inventory Management
- Create inventory schema
- Implement inventory CRUD
- Add stock tracking
- Build low stock alerts
- Create reorder management
- Implement expiry tracking
- Build inventory reports
- Add supplier management

#### Week 10: Notifications
- Setup email service (Nodemailer + SendGrid)
- Implement SMS service (Twilio) - optional
- Create notification templates
- Build notification system
- Add appointment reminders
- Implement payment reminders
- Create notification preferences
- Test all notification channels

**Deliverables**: Complete billing and inventory modules, notification system

---

### Phase 4: Analytics & Optimization (Weeks 11-12)

#### Week 11: Reports & Dashboard
- Create dashboard statistics API
- Build dashboard widgets
- Implement revenue reports
- Create appointment analytics
- Build custom report builder
- Add chart visualizations (Recharts)
- Implement export functionality
- Create admin analytics views

#### Week 12: Performance & Polish
- Implement Redis caching
- Optimize database indexes
- Add pagination and lazy loading
- Improve API response times
- Optimize frontend bundle size
- Add skeleton loaders
- Implement error boundaries
- Conduct performance testing

**Deliverables**: Complete reporting system, optimized performance

---

### Phase 5: Testing & Deployment (Weeks 13-14)

#### Week 13: Comprehensive Testing
- End-to-end testing with Playwright
- User acceptance testing
- Load testing
- Security penetration testing
- Accessibility testing
- Cross-browser testing
- Mobile responsiveness testing
- Bug fixes and refinements

#### Week 14: Deployment & Documentation
- Setup production environment
- Configure CI/CD pipeline
- Implement monitoring and logging
- Setup Sentry error tracking
- Create user documentation
- Write API documentation
- Prepare training materials
- Deploy to production
- Post-deployment monitoring

**Deliverables**: Production-ready system, complete documentation

---

### Phase 6: Post-Launch (Week 15+)

#### Ongoing Tasks
- Monitor system performance
- Collect user feedback
- Fix bugs and issues
- Implement feature requests
- Regular security updates
- Database optimization
- Backup verification
- User training and support

---

## Setup Instructions

### Prerequisites
- Node.js v18+
- PostgreSQL 15+
- Redis 7+
- Docker & Docker Compose (optional but recommended)
- Git

### Local Development Setup

#### 1. Clone Repository
```bash
git clone https://github.com/your-org/pet-hospital-management.git
cd pet-hospital-management
```

#### 2. Setup Backend
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npx prisma generate
npx prisma migrate dev
npx prisma db seed
npm run dev
```

#### 3. Setup Frontend
```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

#### 4. Using Docker (Recommended)
```bash
docker-compose up -d
```

### Environment Variables

#### Backend (.env)
```env
# Server
NODE_ENV=development
PORT=5000
API_URL=http://localhost:5000

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/pet_hospital

# Redis
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-refresh-secret-key
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Email
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASSWORD=your-sendgrid-api-key
EMAIL_FROM=noreply@pethospital.com

# SMS (Optional)
TWILIO_ACCOUNT_SID=your-account-sid
TWILIO_AUTH_TOKEN=your-auth-token
TWILIO_PHONE_NUMBER=+1234567890

# Sentry
SENTRY_DSN=your-sentry-dsn

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api/v1
VITE_SOCKET_URL=http://localhost:5000
VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
VITE_CLOUDINARY_UPLOAD_PRESET=your-upload-preset
```

### Database Migration
```bash
# Create new migration
npx prisma migrate dev --name migration_name

# Apply migrations to production
npx prisma migrate deploy

# Generate Prisma client
npx prisma generate

# Seed database
npx prisma db seed
```

### Running Tests
```bash
# Backend tests
cd backend
npm test
npm run test:watch
npm run test:coverage

# Frontend tests
cd frontend
npm test
npm run test:coverage
```

### Building for Production
```bash
# Backend
cd backend
npm run build
npm start

# Frontend
cd frontend
npm run build
npm run preview
```

---

## Additional Resources

### Documentation Links
- [Prisma Documentation](https://www.prisma.io/docs)
- [React Router v7](https://reactrouter.com)
- [Zustand](https://docs.pmnd.rs/zustand)
- [shadcn/ui](https://ui.shadcn.com)
- [Socket.io](https://socket.io/docs)

### Best Practices
1. Write tests for all critical functionality
2. Use TypeScript strictly (no `any` types)
3. Follow REST API conventions
4. Keep components small and focused
5. Use proper error handling
6. Log all important operations
7. Comment complex business logic
8. Regular code reviews
9. Keep dependencies updated
10. Monitor performance metrics

### Support & Maintenance
- Regular security patches
- Monthly dependency updates
- Quarterly feature reviews
- User feedback sessions
- Performance monitoring
- Backup verification

---

## License
Proprietary - All rights reserved

## Contributors
[Your Team Information]

## Contact
For questions or support, contact: support@pethospital.com

---

**Version**: 1.0.0  
**Last Updated**: November 2025  
**Status**: Development Phase