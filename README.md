# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/e017bf0e-0021-48d8-a1b8-70234c70cbd2

## How can I edit this code?
deploy
There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/e017bf0e-0021-48d8-a1b8-70234c70cbd2) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Set up environment variables for email functionality.
# Create a .env file in the root directory with the following:
# GMAIL_EMAIL=your-email@gmail.com
# GMAIL_PASSWORD=your-app-password
# PORT=3001 (optional, defaults to 3001)
#
# Note: For Gmail, you'll need to use an App Password, not your regular password.
# Generate one at: https://myaccount.google.com/apppasswords

# Step 5: Start the development server and backend server together.
npm run dev:all

# Or start them separately:
# Terminal 1: npm run dev (frontend)
# Terminal 2: npm run server (backend)
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Express (Backend API)
- Nodemailer (Email functionality)

## Email Configuration

This application uses Nodemailer to send emails from all contact forms. To set up email functionality:

1. Create a `.env` file in the root directory
2. Add your Gmail credentials:
   ```
   GMAIL_EMAIL=your-email@gmail.com
   GMAIL_PASSWORD=your-app-password
   PORT=3001
   ```

3. **Important**: For Gmail, you must use an App Password, not your regular password:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Navigate to Security → 2-Step Verification (must be enabled)
   - Go to App Passwords and generate a new app password
   - Use this app password in your `.env` file

4. The backend server runs on port 3001 by default. Make sure this port is available.

All forms in the application (Contact Form Modal, Contact Page, Career Application) will send emails to the address specified in `GMAIL_EMAIL`.

## How can I deploy this project?

### Deploy to Vercel

This project is configured to work with Vercel's serverless functions. Follow these steps:

1. **Push your code to GitHub** (if not already done)

2. **Import your project to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration

3. **Configure Environment Variables**:
   - In your Vercel project settings, go to "Environment Variables"
   - Add the following variables:
     - `GMAIL_EMAIL` = your Gmail address
     - `GMAIL_PASSWORD` = your Gmail App Password
   - **Important**: Make sure to add these for all environments (Production, Preview, Development)

4. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically build and deploy your application
   - The serverless functions in the `api/` directory will be automatically available at `/api/contact` and `/api/career`

5. **Verify**:
   - After deployment, test the contact forms to ensure emails are being sent
   - Check Vercel function logs if there are any issues

**Note**: The `server.js` file is kept for local development. Vercel will use the serverless functions in the `api/` directory instead.

### Deploy via Lovable

Simply open [Lovable](https://lovable.dev/projects/e017bf0e-0021-48d8-a1b8-70234c70cbd2) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
