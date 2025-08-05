import { useState, useEffect } from 'react';
import { Clock, Star, Database, Cpu, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { Button } from './ui/button';

const ComingSoonSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const upcomingFeatures = [
    {
      icon: Database,
      title: "AI Hub System",
      description: "Comprehensive AI agent marketplace with pre-built templates, community sharing, and enterprise solutions.",
      status: "In Development"
    },
    {
      icon: Cpu,
      title: "API Directory",
      description: "Curated library of 1000+ pre-configured API integrations for instant connection to popular services.",
      status: "Beta Testing"
    },
    {
      icon: Star,
      title: "Advanced Analytics",
      description: "Deep insights, performance optimization, and predictive analytics for your AI agent ecosystem.",
      status: "Design Phase"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-nexus-dark via-background to-nexus-darker relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-nexus-purple/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-nexus-blue/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-nexus-blue/10 border border-nexus-blue/30 rounded-full px-4 py-2 mb-6">
              <Clock className="h-4 w-4 text-nexus-blue" />
              <span className="text-sm text-nexus-blue font-medium">Coming Soon</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">The Future of </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">AI Integration</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're building the most comprehensive AI ecosystem ever created. Get ready for features
              that will transform how you think about AI automation and integration.
            </p>
          </div>

          {/* Countdown timer */}
          {/* <div className="bg-card border border-border rounded-lg p-8 mb-16 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Platform Launch Countdown</h3>
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-gradient-primary text-nexus-dark rounded-lg p-4 mb-2 shadow-glow">
                    <div className="text-2xl md:text-3xl font-bold">
                      {value.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground capitalize">{unit}</div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Upcoming features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {upcomingFeatures.map((feature, index) => (
              <Card
                key={feature.title}
                className="group bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  {/* Status badge */}
                  <div className="inline-flex items-center bg-nexus-purple/10 border border-nexus-purple/30 rounded-full px-3 py-1 mb-4">
                    <span className="text-xs text-nexus-purple font-medium">{feature.status}</span>
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <feature.icon className="h-12 w-12 text-nexus-blue group-hover:text-nexus-glow transition-colors duration-300" />
                    <div className="absolute inset-0 h-12 w-12 bg-nexus-blue/10 rounded-lg blur-lg group-hover:bg-nexus-blue/20 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Early access signup */}
          <div className="text-center bg-gradient-glow border border-border rounded-lg p-12 animate-fade-in-up">
            <h3 className="text-3xl font-bold mb-6 text-foreground">Be First to Experience the Future</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our exclusive early access program and get notified the moment these powerful features go live.
              Plus, enjoy special pricing and priority support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              {/* <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-nexus-blue/50 text-foreground"
              /> */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="bg-gradient-primary text-nexus-dark px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                    Get Early Access
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-6 bg-card/95 backdrop-blur-md border-nexus-blue/20">
                  <div className="text-center space-y-4">
                    <Rocket className="h-12 w-12 mx-auto text-nexus-blue animate-bounce" />
                    <h3 className="text-xl font-bold text-foreground">Platform Launching Soon!</h3>
                    <p className="text-muted-foreground">
                      Our Platform Launch soon in market. Be the first to experience the future of AI automation.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;