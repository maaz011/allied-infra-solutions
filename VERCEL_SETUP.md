# Vercel Deployment Setup Instructions

## Problem Fixed
The connection failure was caused by **mixed content blocking** - your site uses HTTPS but the WhatsApp API endpoint uses HTTP. Browsers block HTTP requests from HTTPS pages for security.

## Solution Implemented
Created a Vercel serverless function (`/api/send-whatsapp.js`) that proxies API calls from the server-side, avoiding CORS and mixed content issues.

## Required Steps for Vercel

### 1. Set Environment Variables in Vercel Dashboard
Go to: https://vercel.com/your-project/settings/environment-variables

Add these environment variables:
```
VITE_EVOLUTION_KEY=modimc
VITE_EVOLUTION_API_URL=http://94.136.187.188:8084
VITE_ABDUL_WHATSAPP=919667462284
VITE_SERVICE_ID=service_13lvyeg
VITE_ADMIN_TEMPLATE_ID=template_mluya8x
VITE_USER_TEMPLATE_ID=template_e8089g1
VITE_PUBLIC_KEY=MylrLw5zBRs5yqgx6s
```

**Important:** Set these for **Production**, **Preview**, and **Development** environments.

### 2. Deploy to Vercel
1. Push your changes to GitHub: `git push origin main`
2. Vercel will automatically detect and deploy
3. Or manually trigger deployment in Vercel dashboard

### 3. Test the Contact Form
After deployment, test the contact form on https://alliedinfrasolutions.in/
- The form should now work without connection errors
- WhatsApp messages will be sent via the serverless function

## Files Changed
- ✅ Created `/api/send-whatsapp.js` - Serverless function to proxy API calls
- ✅ Updated `/src/components/ContactForm.jsx` - Now uses `/api/send-whatsapp` endpoint
- ✅ Updated `/vercel.json` - Ensures API routes work correctly

## Local Development
For local testing, create a `.env` file (copy from `-MSI.env`):
```bash
cp -MSI.env .env
```

Then run: `npm run dev`
