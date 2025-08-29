import { Button } from "@/components/ui/button";
import { Smartphone, Users, MessageCircle, BookOpen, Brain, Stethoscope, Code, ArrowRight, Play } from "lucide-react";

const SocialApp = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Exclusive Community",
      description: "Private platform for AltVerse8 Foundation members only"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Knowledge Sharing",
      description: "Share educational content and collaborate on projects"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Interest Groups",
      description: "Join specialized communities based on your passions"
    }
  ];

  const groups = [
    { icon: <Brain className="w-5 h-5" />, name: "Artificial Intelligence", members: "1.2k" },
    { icon: <Stethoscope className="w-5 h-5" />, name: "Medicine & Healthcare", members: "890" },
    { icon: <Code className="w-5 h-5" />, name: "Information Technology", members: "1.5k" },
    { icon: <BookOpen className="w-5 h-5" />, name: "History & Culture", members: "650" },
  ];

  return (
    <section id="app" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/50 border border-primary/20 mb-6">
              <Smartphone className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Coming Soon</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-jakarta font-bold text-foreground mb-6">
              Exclusive <span className="text-gradient">Social Media Platform</span> for Our Community
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We're developing a revolutionary social media application exclusively for AltVerse8 Foundation members. 
              Think Instagram meets educational collaboration – a space where knowledge thrives and innovation flourishes.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join interest-based groups, share educational content, collaborate on projects, and connect with 
              like-minded individuals across our global community. Your learning journey becomes a social experience.
            </p>

            {/* Features */}
            <div className="grid gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="group">
                <Play className="mr-2 w-4 h-4" />
                Get Early Access
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo Video
              </Button>
            </div>

            {/* App Store Badges */}
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Google Play Store
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Apple App Store
              </div>
            </div>
          </div>

          {/* App Preview */}
          <div className="relative animate-slide-up">
            {/* Phone Mockup */}
            <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 py-3 bg-primary/5">
                  <span className="text-xs font-medium">9:41 AM</span>
                  <span className="text-xs">AltVerse8 App</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-foreground/20 rounded-sm"></div>
                    <div className="w-6 h-2 bg-foreground/20 rounded-sm"></div>  
                  </div>
                </div>

                {/* App Content */}
                <div className="p-4">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">A8</span>
                    </div>
                    <h3 className="font-semibold text-foreground">Welcome back!</h3>
                    <p className="text-xs text-muted-foreground">Your learning community awaits</p>
                  </div>

                  {/* Interest Groups */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-foreground">Popular Groups</h4>
                    {groups.map((group, index) => (
                      <div key={group.name} className="flex items-center space-x-3 p-3 rounded-lg bg-card-gradient border border-border/30">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <div className="text-primary">
                            {group.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-foreground">{group.name}</div>
                          <div className="text-xs text-muted-foreground">{group.members} members</div>
                        </div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
            <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Beta Signup */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
            <h3 className="font-jakarta font-bold text-2xl text-foreground mb-4">
              Be Among the First to Experience It
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our exclusive beta program and get early access to the AltVerse8 social platform. 
              Help us shape the future of educational collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Join Beta Program
              </Button>
              <Button variant="outline" size="lg">
                Learn More Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialApp;