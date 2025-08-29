import { Button } from "@/components/ui/button";
import { GraduationCap, Rocket, Users2, BookOpen, ArrowRight } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education Excellence",
      description: "Comprehensive educational programs designed to foster critical thinking and innovation in students across all disciplines.",
      features: ["Advanced Curriculum", "Expert Mentorship", "Practical Learning", "Global Perspectives"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Startup Incubation",
      description: "End-to-end support for student entrepreneurs to transform their innovative ideas into sustainable, scalable businesses.",
      features: ["Business Planning", "Funding Guidance", "Market Access", "Technical Support"],
      color: "from-primary to-primary-light"
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Community Building",
      description: "Creating vibrant ecosystems where like-minded individuals collaborate, share knowledge, and drive collective growth.",
      features: ["Networking Events", "Peer Learning", "Cross-cultural Exchange", "Leadership Development"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const regions = [
    {
      name: "Dubai, UAE",
      description: "Innovation hub connecting Middle East markets with global opportunities",
      initiatives: 15,
      students: 350
    },
    {
      name: "Kerala, India", 
      description: "Educational excellence fostering technological advancement and cultural innovation",
      initiatives: 22,
      students: 480
    },
    {
      name: "Sri Lanka",
      description: "Sustainable development through entrepreneurship and community engagement",
      initiatives: 18,
      students: 290
    }
  ];

  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/50 border border-primary/20 mb-6">
            <BookOpen className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Our Programs & Initiatives</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-jakarta font-bold text-foreground mb-6">
            Empowering Through <span className="text-gradient">Education & Innovation</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive programs span education, entrepreneurship, and community building, 
            creating pathways for success across three dynamic regions.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group relative p-8 rounded-2xl bg-card-gradient border border-border/50 hover-lift"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {program.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-jakarta font-bold text-xl text-foreground mb-4">
                {program.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {program.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Regional Focus */}
        <div className="animate-slide-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-jakarta font-bold text-foreground mb-4">
              Our Regional Impact
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Strategically positioned across three key regions to maximize our educational 
              and entrepreneurial impact globally.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <div
                key={region.name}
                className="p-6 rounded-xl bg-background border border-border/50 hover-lift text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-jakarta font-semibold text-lg text-foreground mb-3">
                  {region.name}
                </h4>
                <p className="text-muted-foreground text-sm mb-6">
                  {region.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">{region.initiatives}</div>
                    <div className="text-xs text-muted-foreground">Initiatives</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{region.students}</div>
                    <div className="text-xs text-muted-foreground">Students</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
            <h3 className="font-jakarta font-bold text-2xl text-foreground mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of students who have already started their journey with AltVerse8 Foundation. 
              Your innovative ideas deserve the right support and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Apply for Programs
              </Button>
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;