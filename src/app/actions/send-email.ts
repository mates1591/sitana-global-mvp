'use server';

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return {
        success: false,
        error: 'Please fill in all required fields.',
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: 'Please enter a valid email address.',
      };
    }

    // Map subject value to readable text
    const subjectMap: { [key: string]: string } = {
      general: 'General Inquiry',
      patient: 'Patient Support',
      doctor: 'Healthcare Provider Inquiry',
      technical: 'Technical Support',
      billing: 'Billing Question',
      partnership: 'Partnership Opportunity',
      press: 'Press & Media',
    };

    const subjectText = subjectMap[formData.subject] || formData.subject;

    // Compose the email message
    const emailContent = `
New Contact Form Submission from SITANA Global Website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject: ${subjectText}

Message:
${formData.message}

---
This email was sent from the SITANA Global contact form.
    `.trim();

    const msg = {
      to: 'info@sitanaglobal.com',
      from: 'noreply@em2246.sitanaglobal.com', // Using your verified SendGrid domain
      subject: `Contact Form: ${subjectText}`,
      text: emailContent,
      replyTo: formData.email,
    };

    await sgMail.send(msg);

    return {
      success: true,
      message: 'Your message has been sent successfully. We will get back to you soon!',
    };
  } catch (error: unknown) {
    console.error('SendGrid Error:', error);

    // Return a user-friendly error message
    return {
      success: false,
      error: 'Failed to send message. Please try again later or contact us directly at info@sitanaglobal.com',
    };
  }
}

