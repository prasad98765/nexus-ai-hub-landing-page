# EmailJS Setup Guide

## Quick Setup Instructions

1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com](https://www.emailjs.com)
   - Sign up for a free account

2. **Create Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template:

```
Subject: New Contact Form Message - {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from Nexus AI Hub contact form.
```

4. **Get Your Keys**
   - Public Key: Found in "API Keys" section
   - Service ID: Found in "Email Services" section
   - Template ID: Found in "Email Templates" section

5. **Update the Code**
   Replace the placeholder values in `src/components/ContactSection.tsx`:
   
   ```typescript
   // Replace these with your actual EmailJS credentials
   await emailjs.init('YOUR_PUBLIC_KEY');
   
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     templateParams
   );
   ```

## Current Fallback
The contact form currently shows a success message even without EmailJS setup. Messages will be displayed as sent to support@nexusaihub.co.in in the toast notification.

To fully enable email functionality, complete the steps above and update the ContactSection.tsx file with your EmailJS credentials.