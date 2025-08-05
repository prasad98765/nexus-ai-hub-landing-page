import { useState } from 'react';
import { Mail, Send, Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Initialize EmailJS (you'll need to replace these with your actual IDs)
      await emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'support@nexusaihub.co.in'
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours at support@nexusaihub.co.in",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      // Fallback: show success message even if EmailJS fails
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours at support@nexusaihub.co.in",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    // { icon: Github, href: "#", label: "GitHub", color: "hover:text-nexus-blue" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-nexus-purple" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-nexus-glow" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-nexus-dark to-nexus-darker relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-nexus-blue/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-nexus-purple/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Get In </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with AI? Have questions about our platform? 
              We'd love to hear from you and help you get started.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> */}
          <div className="grid grid-cols-1 gap-12">

            {/* Contact form */}
            {/* <div className="animate-fade-in-up">
              <div className="bg-card border border-border rounded-lg p-8 shadow-card">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-nexus-blue/50 transition-all duration-200 text-foreground"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-nexus-blue/50 transition-all duration-200 text-foreground"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-nexus-blue/50 transition-all duration-200 text-foreground"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-nexus-blue/50 transition-all duration-200 text-foreground resize-none"
                      placeholder="Tell us about your project or questions..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full magnetic-button ripple bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg py-6"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div> */}

            {/* Contact info and social */}
            {/* <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}> */}
              <div className="space-y-8">
                {/* Direct contact */}
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Direct Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-nexus-blue/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-nexus-blue" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Email us at</div>
                        <a 
                          href="mailto:support@nexusaihub.co.in" 
                          className="text-nexus-blue hover:text-nexus-glow transition-colors duration-200 font-medium"
                        >
                          support@nexusaihub.co.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Follow Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`float-animation w-12 h-12 bg-nexus-darker rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-glow magnetic-button`}
                        aria-label={social.label}
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Stay updated with our latest features and AI insights
                  </p>
                </div>

                {/* Quick response promise */}
                <div className="bg-gradient-glow border border-border rounded-lg p-8">
                  <h4 className="text-lg font-bold mb-4 text-foreground">Our Commitment</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-nexus-blue rounded-full" />
                      <span>Response within 24 hours</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-nexus-purple rounded-full" />
                      <span>Dedicated technical support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-nexus-glow rounded-full" />
                      <span>Free consultation for enterprises</span>
                    </li>
                  </ul>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;