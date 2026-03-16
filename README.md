**# CareerMatcch

CareerMatcch is an AI-powered career growth platform that helps users prepare for jobs with personalized guidance, industry insights, interview practice, and resume workflows.

## Overview

The platform combines:

- Personalized onboarding based on user industry, skills, and experience
- AI-generated industry insights (salary ranges, trends, demand signals)
- Adaptive technical interview question generation with scoring and tips
- Resume save/edit flow with support for ATS feedback fields in the data model
- Authentication and user management with Clerk

## Core Features

- AI Career Guidance: Industry-tailored insights generated via Gemini
- Interview Preparation: Dynamic technical quizzes with explanations
- Assessment Tracking: Saves quiz performance history in the database
- Industry Analytics: Structured data like growth rate, top skills, and outlook
- Resume Workflow: Persisted resume content per user
- Secure Access: Protected app routes using Clerk middleware

## Tech Stack

- Frontend: Next.js 16 (App Router), React 19, Tailwind CSS 4, Radix UI
- Backend: Next.js Server Actions
- Auth: Clerk
- Database: PostgreSQL + Prisma ORM
- AI: Google Gemini (`gemini-2.5-flash`)
- Jobs/Automation: Inngest (scheduled industry insight refresh)





## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Configure your `.env` values.

3. Run Prisma migrations:

```bash
npx prisma migrate dev
```

4. Start the development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - start local development server
- `npm run build` - build for production
- `npm run start` - run production build
- `npm run lint` - run ESLint



**
