import { MousePointer, Puzzle, Smartphone, MessageSquare, Globe, Zap, Calendar, Gift } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const FeaturesSection = () => {
  const features = [
    {
      icon: MousePointer,
      title: "Drag & Drop Builder",
      description: "Create sophisticated AI agents with our intuitive visual interface. No coding required - just drag, drop, and deploy.",
      color: "nexus-blue"
    },
    {
      icon: Puzzle,
      title: "Universal Integrations",
      description: "Connect any third-party tool, API, or service. From CRM systems to social media platforms - if it has an API, we can connect it.",
      color: "nexus-purple"
    },
    {
      icon: Smartphone,
      title: "Multi-Platform Deploy",
      description: "Deploy your AI agents instantly to web apps, mobile interfaces, WhatsApp bots, or any platform with our universal deployment system.",
      color: "nexus-glow"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Integration",
      description: "Launch your AI agents directly on WhatsApp for instant customer engagement and automated support workflows.",
      color: "nexus-blue"
    },
    {
      icon: Globe,
      title: "Public Link Sharing",
      description: "Share your AI agents via simple public links. Perfect for customer support, lead generation, or internal team tools.",
      color: "nexus-purple"
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Monitor your AI agents' performance with comprehensive analytics and insights to optimize engagement and effectiveness.",
      color: "nexus-glow"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-nexus-darker via-background to-nexus-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-nexus-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-nexus-purple/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Powerful </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to build, deploy, and manage intelligent AI agents that transform 
              how your business operates and engages with customers.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="group bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <feature.icon className={`h-12 w-12 text-${feature.color} group-hover:animate-pulse transition-all duration-300`} />
                    <div className={`absolute inset-0 h-12 w-12 bg-${feature.color}/10 rounded-lg blur-lg group-hover:bg-${feature.color}/20 transition-all duration-300`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-nexus-glow transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in-up">
            <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Experience the Power?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of businesses already transforming their operations with Nexus AI Hub.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="magnetic-button ripple bg-gradient-primary text-nexus-dark px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300">
                      Start Free Trial
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-6 bg-card/95 backdrop-blur-md border-nexus-glow/20">
                    <div className="text-center space-y-4">
                      <Gift className="h-12 w-12 mx-auto text-nexus-glow animate-pulse" />
                      <h3 className="text-xl font-bold text-foreground">Free Trial Soon!</h3>
                      <p className="text-muted-foreground">
                        Our Platform Launch soon in market. Get ready for unlimited AI agent building with our free trial.
                      </p>
                      <div className="bg-nexus-glow/10 rounded-lg p-3">
                        <p className="text-sm text-nexus-glow font-medium">🎁 30-day free access</p>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="magnetic-button ripple border border-nexus-blue/50 text-nexus-blue px-6 py-3 rounded-lg font-semibold hover:bg-nexus-blue/10 transition-all duration-300">
                      Schedule Demo
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-6 bg-card/95 backdrop-blur-md border-nexus-blue/20">
                    <div className="text-center space-y-4">
                      <Calendar className="h-12 w-12 mx-auto text-nexus-blue animate-bounce" />
                      <h3 className="text-xl font-bold text-foreground">Demo Scheduling Soon!</h3>
                      <p className="text-muted-foreground">
                        Our Platform Launch soon in market. Book a personalized demo to see AI agents in action.
                      </p>
                      <div className="bg-nexus-blue/10 rounded-lg p-3">
                        <p className="text-sm text-nexus-blue font-medium">📅 1-on-1 walkthrough</p>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;