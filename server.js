import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
// Increase body size limit to 10MB for resume uploads (base64 encoded files can be large)
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Create reusable transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error with email configuration:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message, propertyName } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: process.env.GMAIL_EMAIL,
      subject: propertyName 
        ? `New Contact Form Submission - Interest in ${propertyName}`
        : 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        ${propertyName ? `<p><strong>Property of Interest:</strong> ${propertyName}</p>` : ''}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This email was sent from the Nextgen Estate Advisors contact form.</em></p>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send email', 
      details: error.message 
    });
  }
});

// Career Application Endpoint
app.post('/api/career', async (req, res) => {
  try {
    const { name, email, phone, position, experience, coverLetter, resume } = req.body;

    console.log('Career application received:', { name, email, phone, position, experience, hasResume: !!resume });

    if (!name || !email || !phone || !position || !experience || !coverLetter) {
      console.error('Missing required fields:', { name: !!name, email: !!email, phone: !!phone, position: !!position, experience: !!experience, coverLetter: !!coverLetter });
      return res.status(400).json({ error: 'All required fields must be provided' });
    }

    // Validate environment variables
    if (!process.env.GMAIL_EMAIL || !process.env.GMAIL_PASSWORD) {
      console.error('Missing Gmail credentials in environment variables');
      return res.status(500).json({ 
        error: 'Email service not configured',
        details: 'Gmail credentials are missing'
      });
    }

    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: process.env.GMAIL_EMAIL,
      subject: `Job Application - ${position}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Position Applied For:</strong> ${position}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Years of Experience:</strong> ${experience}</p>
        <p><strong>Cover Letter:</strong></p>
        <p>${coverLetter.replace(/\n/g, '<br>')}</p>
        ${resume ? `<p><strong>Resume:</strong> ${resume.name || 'Attached'}</p>` : ''}
        <hr>
        <p><em>This email was sent from the Nextgen Estate Advisors career application form.</em></p>
      `,
      replyTo: email,
      attachments: resume && resume.content ? [
        {
          filename: resume.name || 'resume.pdf',
          content: resume.content,
          encoding: 'base64',
        }
      ] : [],
    };

    console.log('Sending email for career application...');
    const emailResult = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', emailResult.messageId);

    res.status(200).json({ 
      success: true, 
      message: 'Application submitted successfully' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    res.status(500).json({ 
      error: 'Failed to submit application', 
      details: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Make sure GMAIL_EMAIL and GMAIL_PASSWORD are set in your .env file`);
});

