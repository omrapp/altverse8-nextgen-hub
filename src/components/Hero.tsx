import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Globe2 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AltVerse8 Foundation - Pioneering education and innovation across Dubai, Kerala, and Sri Lanka"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/50 border border-primary/20 mb-8">
            <Globe2 className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              Dubai • Kerala • Sri Lanka
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-jakarta font-bold text-foreground mb-6 leading-tight">
            Pioneering <span className="text-gradient">Next-Generation</span>
            <br />
            Lifestyles & Ecosystems
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Empowering students to transform innovative ideas into successful startups through 
            education, entrepreneurship, and community building across three dynamic regions.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Students Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Key Regions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Startups Launched</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="lg" className="group">
              Join Our Foundation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 w-4 h-4" />
              Watch Our Story
            </Button>
          </div>

          {/* App Teaser */}
          <div className="mt-12 p-6 rounded-2xl bg-card-gradient border border-border/50 max-w-2xl mx-auto hover-lift">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Globe2 className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="font-jakarta font-semibold text-lg text-foreground mb-2">
              Exclusive Social Media App Coming Soon
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Join our private community platform for educational content sharing and collaboration
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                Google Play Store
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                Apple App Store
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;