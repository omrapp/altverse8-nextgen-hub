import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Lightbulb, Globe2, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation First",
      description: "Pioneering research into next-generation lifestyles and sustainable ecosystem building."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description: "Fostering collaborative environments where ideas flourish and partnerships thrive."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Impact Focused",
      description: "Transforming student ideas into successful startups with measurable social impact."
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Global Vision",
      description: "Connecting opportunities across Dubai, Kerala, and Sri Lanka for maximum reach."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/50 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">About AltVerse8 Foundation</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-jakarta font-bold text-foreground mb-6">
              Building Tomorrow's <span className="text-gradient">Innovation Ecosystem</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              AltVerse8 Foundation stands at the forefront of educational innovation, 
              creating pathways for the next generation of entrepreneurs and thought leaders. 
              Our mission spans three dynamic regions, fostering a unique blend of traditional 
              wisdom and cutting-edge technology.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Through comprehensive programs in education and entrepreneurship, we empower 
              students to not just dream, but to build. Our approach combines mentorship, 
              resources, and community support to transform innovative ideas into sustainable 
              businesses that create lasting impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline">
                View Our Impact Report
              </Button>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-card-gradient border border-border/50 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">
                    {value.icon}
                  </div>
                </div>
                <h3 className="font-jakarta font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2019</div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Students Mentored</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Startups Launched</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;