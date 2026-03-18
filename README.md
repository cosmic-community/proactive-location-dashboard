# Proactive Location Dashboard
![App Preview](https://imgix.cosmicjs.com/868d8760-227b-11f1-8e73-95937fcad31d-photo-1504674900247-0877df9cc836-1773804936084.jpg?w=1200&h=630&fit=crop&auto=format,compress)

A responsive, data-rich dashboard for monitoring alerts, AI recommendations, and places from your Cosmic bucket.

## Features
- Alerts overview with severity filtering and search
- Recommendations panel with AI score and priority
- Places directory with category filtering
- Summary KPI cards for quick status visibility
- Fully responsive layout with Tailwind CSS
- Secure server-side Cosmic SDK integration

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69ba1ca83704c8f1904d071c&clone_repository=69ba21e93704c8f1904d07fe)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "start working"

### Code Generation Prompt

> "Create a React dashboard that displays and manages my existing content"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies used
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Cosmic SDK

## Getting Started

### Prerequisites
- Bun installed (https://bun.sh)
- A Cosmic bucket with the provided object types

### Installation
```bash
bun install
bun run dev
```

## Cosmic SDK Examples
```ts
import { cosmic } from '@/lib/cosmic'

export async function getAlerts() {
  const response = await cosmic.objects.find({ type: 'alerts' }).depth(1)
  return response.objects
}
```

## Cosmic CMS Integration
This dashboard reads from:
- `alerts` (title, alert_type, severity, message, related_place, expires_on)
- `recommendations` (title, place, reason, priority, ai_score, suggested_for)
- `places` (name, category, short_description, address, latitude, longitude, hero_image, insights)

Learn more at https://www.cosmicjs.com/docs.

## Deployment Options
- **Vercel**: Recommended for Next.js hosting
- **Netlify**: Works well with static export

Set the following environment variables in your hosting dashboard:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`
<!-- README_END -->