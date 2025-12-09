# Vercel Deployment Guide

## Environment Variables Required

You need to set **2 environment variables** in Vercel:

### 1. `GMAIL_EMAIL`
- **Value**: Your Gmail address (e.g., `your-email@gmail.com`)
- **Description**: The email address that will send and receive form submissions

### 2. `GMAIL_PASSWORD`
- **Value**: Your Gmail App Password (NOT your regular Gmail password)
- **Description**: A 16-character app-specific password generated from Google Account settings

## How to Get Gmail App Password

1. **Enable 2-Step Verification** (if not already enabled):
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable "2-Step Verification" if it's not already on

2. **Generate App Password**:
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" as the app
   - Select "Other (Custom name)" as the device
   - Enter a name like "Nextgen Estate Vercel"
   - Click "Generate"
   - Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

## Setting Environment Variables in Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project
3. Go to **Settings** → **Environment Variables**
4. Add each variable:
   - Click **Add New**
   - **Name**: `GMAIL_EMAIL`
   - **Value**: `your-email@gmail.com`
   - **Environment**: Select all (Production, Preview, Development)
   - Click **Save**
   - Repeat for `GMAIL_PASSWORD`

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Login to Vercel
vercel login

# Set environment variables
vercel env add GMAIL_EMAIL
vercel env add GMAIL_PASSWORD
```

## Important Notes

⚠️ **DO NOT** commit these values to your repository. They should only be set in Vercel's environment variables.

⚠️ **DO NOT** use your regular Gmail password. Always use an App Password.

⚠️ Make sure to add the environment variables to **all environments** (Production, Preview, Development) so they work in all deployments.

## Deployment Steps

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Add nodemailer integration"
   git push
   ```

2. **Set Environment Variables in Vercel** (as described above)

3. **Deploy**:
   - If auto-deploy is enabled, Vercel will deploy automatically
   - Or manually trigger deployment from Vercel dashboard

4. **Verify**:
   - After deployment, test the contact forms
   - Check Vercel Function Logs if there are any issues
   - Make sure emails are being received

## Troubleshooting

### Emails not sending?
- Check Vercel Function Logs for errors
- Verify environment variables are set correctly
- Make sure you're using App Password, not regular password
- Check that 2-Step Verification is enabled on your Google Account

### 404 Errors?
- Make sure the `api/` folder is pushed to your repository
- Verify the serverless functions are deployed (check Vercel Functions tab)
- Check that the API routes are correct

