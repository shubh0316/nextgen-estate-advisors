import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, position, experience, coverLetter, resume } = req.body;

    if (!name || !email || !phone || !position || !experience || !coverLetter) {
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

    // Create reusable transporter object using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

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

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ 
      success: true, 
      message: 'Application submitted successfully' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to submit application', 
      details: error.message 
    });
  }
}

