import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.programs'), href: "/programs" },
    { name: t('nav.socialApp'), href: "/social-app" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  const legalLinks = [
    { name: t('footer.privacy'), href: "/privacy" },
    { name: t('footer.terms'), href: "/terms" },
  ];

  const regions = [
    { name: "Dubai, UAE", email: "dubai@altverse8.foundation" },
    { name: "Kerala, India", email: "kerala@altverse8.foundation" },
    { name: "Sri Lanka", email: "srilanka@altverse8.foundation" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A8</span>
                </div>
                <div>
                  <h3 className="font-jakarta font-bold text-lg text-background">AltVerse8</h3>
                  <p className="text-xs text-background/70">Foundation</p>
                </div>
              </div>
              
              <p className="text-background/80 text-sm leading-relaxed mb-6">
                {t('footer.description')}
              </p>
              
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-background/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <div className="text-background/70 group-hover:text-primary transition-colors">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-jakarta font-semibold text-background mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-background/70 hover:text-primary text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regional Contacts */}
            <div>
              <h4 className="font-jakarta font-semibold text-background mb-6">Regional Offices</h4>
              <ul className="space-y-4">
                {regions.map((region) => (
                  <li key={region.name}>
                    <div className="text-sm">
                      <div className="text-background/90 font-medium mb-1">{region.name}</div>
                      <a
                        href={`mailto:${region.email}`}
                        className="text-background/70 hover:text-primary transition-colors text-xs"
                      >
                        {region.email}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-jakarta font-semibold text-background mb-6">Stay Connected</h4>
              <p className="text-background/70 text-sm mb-6">
                Get the latest updates on our programs, initiatives, and community highlights.
              </p>
              
              <div className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-background/10 border border-background/20 rounded-lg text-background placeholder-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Button variant="hero" size="sm">
                    Subscribe
                  </Button>
                </div>
                
                <div className="flex items-center space-x-4 text-xs text-background/60">
                  <div className="flex items-center">
                    <Mail className="w-3 h-3 mr-1" />
                    Monthly Newsletter
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                    No Spam
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-background/70 text-sm">
              {t('footer.copyright')}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              {legalLinks.map((link, index) => (
                <div key={link.name} className="flex items-center">
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <div className="w-1 h-1 bg-background/30 rounded-full ml-6"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-background/20">
            <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-background/50 mr-2" />
                <span className="text-background/60 text-xs">Global Foundation</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-4 h-4 text-background/50 mr-2" />
                <span className="text-background/60 text-xs">24/7 Support Available</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-4 h-4 text-background/50 mr-2" />
                <a 
                  href="mailto:info@altverse8.foundation"
                  className="text-background/60 hover:text-primary text-xs transition-colors"
                >
                  info@altverse8.foundation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;