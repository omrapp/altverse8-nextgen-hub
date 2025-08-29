import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Globe, Send } from "lucide-react";

const Contact = () => {
  const offices = [
    {
      region: "Dubai, UAE",
      address: "Dubai International Financial Centre",
      email: "dubai@altverse8.foundation",
      phone: "+971 4 XXX XXXX"
    },
    {
      region: "Kerala, India", 
      address: "Kochi, Kerala",
      email: "kerala@altverse8.foundation",
      phone: "+91 484 XXX XXXX"
    },
    {
      region: "Sri Lanka",
      address: "Colombo, Sri Lanka",
      email: "srilanka@altverse8.foundation", 
      phone: "+94 11 XXX XXXX"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/50 border border-primary/20 mb-6">
            <Mail className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Get in Touch</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-jakarta font-bold text-foreground mb-6">
            Connect With <span className="text-gradient">AltVerse8 Foundation</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your journey with us? We're here to answer your questions 
            and help you take the next step in your educational and entrepreneurial adventure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="p-8 rounded-2xl bg-card-gradient border border-border/50">
              <h3 className="font-jakarta font-bold text-xl text-foreground mb-6">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>

                <Button variant="cta" size="lg" className="w-full group">
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Global Contact */}
            <div className="p-6 rounded-xl bg-background border border-border/50 hover-lift">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-jakarta font-semibold text-lg text-foreground">
                    Global Headquarters
                  </h3>
                  <p className="text-sm text-muted-foreground">General Inquiries</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <Mail className="w-4 h-4 inline mr-2" />
                  info@altverse8.foundation
                </p>
                <p className="text-muted-foreground">
                  <Globe className="w-4 h-4 inline mr-2" />
                  www.altverse8.foundation
                </p>
              </div>
            </div>

            {/* Regional Offices */}
            <div className="space-y-4">
              <h3 className="font-jakarta font-semibold text-lg text-foreground">
                Regional Offices
              </h3>
              {offices.map((office, index) => (
                <div
                  key={office.region}
                  className="p-4 rounded-lg bg-background border border-border/30 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-semibold text-foreground mb-2">{office.region}</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p className="flex items-center">
                      <MapPin className="w-3 h-3 mr-2" />
                      {office.address}
                    </p>
                    <p className="flex items-center">
                      <Mail className="w-3 h-3 mr-2" />
                      {office.email}
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-3 h-3 mr-2" />
                      {office.phone}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
              <h3 className="font-jakarta font-semibold text-lg text-foreground mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Schedule a Consultation Call
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Apply for Programs
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Partnership Opportunities
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Media & Press Inquiries
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="max-w-xl mx-auto p-8 rounded-2xl bg-card-gradient border border-border/50">
            <h3 className="font-jakarta font-bold text-xl text-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest updates on programs, 
              initiatives, and community highlights.
            </p>
            <div className="flex gap-3">
              <Input
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button variant="hero">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;