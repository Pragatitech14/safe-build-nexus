import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, HardHat } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your construction site safety? Contact us to learn more about our Smart Safety Management System.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your construction safety needs..."
                    rows={6}
                    required
                    className="mt-2"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-construction text-lg py-3"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              
              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-2xl p-6 shadow-soft">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email Us</h3>
                      <p className="text-muted-foreground">contact@safetypro.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 shadow-soft">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Call Us</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 shadow-soft">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-safety-yellow/10 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-safety-yellow" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Visit Us</h3>
                      <p className="text-muted-foreground">123 Safety Ave, Tech City, TC 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-professional rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Why Choose SafetyPro?</h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-safety-yellow rounded-full mr-3"></div>
                    99%+ accuracy in PPE detection
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-safety-yellow rounded-full mr-3"></div>
                    24/7 AI-powered safety assistance
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-safety-yellow rounded-full mr-3"></div>
                    Comprehensive training modules
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-safety-yellow rounded-full mr-3"></div>
                    Easy integration with existing systems
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-safety-yellow rounded-full mr-3"></div>
                    Proven ROI and accident reduction
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-20 bg-industrial-gray text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-construction rounded-lg">
                  <HardHat className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">SafetyPro</span>
              </div>
              <p className="text-white/80 mb-4 max-w-md">
                Smart Construction Safety Management System - Protecting workers through innovative AI technology 
                and comprehensive safety solutions.
              </p>
              <p className="text-white/60 text-sm">
                © 2024 SafetyPro. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="/" className="hover:text-safety-yellow transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-safety-yellow transition-colors">About</a></li>
                <li><a href="/features" className="hover:text-safety-yellow transition-colors">Features</a></li>
                <li><a href="/contact" className="hover:text-safety-yellow transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-safety-yellow transition-colors">PPE Detection</li>
                <li className="hover:text-safety-yellow transition-colors">Virtual Training</li>
                <li className="hover:text-safety-yellow transition-colors">AI Chatbot</li>
                <li className="hover:text-safety-yellow transition-colors">Safety Analytics</li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;