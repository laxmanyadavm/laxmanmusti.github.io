import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Calendar, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'laxmanyadavmusti@gmail.com',
      href: 'mailto:laxmanyadavmusti@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (551) 998-4253',
      href: 'tel:+15519984253',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jersey City, NJ',
      href: 'https://maps.google.com/?q=Jersey City, NJ',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Calendar,
      label: 'Schedule a Call',
      value: 'Book 30min meeting',
      href: '#',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/laxmanyadavm',
      username: '@laxmanmusti'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/laxman-musti/',
      username: 'laxmanmusti'
    }
  ];

  const downloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = 'Laxman_Yadav_Musti.pdf';
    link.download = 'Laxman_Musti_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a conversation about data and analytics. Let's talk!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant hover:shadow-glow transition-shadow duration-500">
              <CardHeader>
                <CardTitle className="text-2xl">Send me a message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or what you'd like to discuss..."
                      rows={6}
                      className="w-full"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div>
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200 group"
                      >
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{info.label}</div>
                          <div className="text-sm text-muted-foreground">{info.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-6">Find me online</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200 group"
                      >
                        <div className="p-3 rounded-lg bg-gradient-primary shadow-lg group-hover:scale-110 transition-transform duration-200">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{social.label}</div>
                          <div className="text-sm text-muted-foreground">{social.username}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                    <Button onClick={downloadResume} className="btn-hero">
                  <Download className="w-5 h-5 mr-2" />
                      Download Resume (PDF)
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => window.open('#', '_blank')}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule a 30min Call
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-green-600 dark:text-green-400">Available for opportunities</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I'm currently open to new full-time opportunities, consulting projects, 
                    and collaborative ventures. Let's discuss how we can work together!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-primary text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Data?</h3>
                <p className="mb-6 text-white/90">
                  Let's discuss how data analytics can drive your business forward. 
                  I'd love to hear about your challenges and explore solutions together.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => document.querySelector('#contact form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start the Conversation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;