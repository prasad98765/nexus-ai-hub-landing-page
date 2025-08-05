import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { ArrowRight, PlusCircle, Settings, Rocket } from 'lucide-react';
import { Button } from './ui/button';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: PlusCircle,
      title: "Design Your Agent",
      description: "Use our intuitive drag-and-drop interface to design your AI agent's workflow, personality, and capabilities.",
      color: "nexus-blue"
    },
    {
      number: "02",
      icon: Settings,
      title: "Connect & Configure",
      description: "Integrate your favorite tools, APIs, and data sources. Configure triggers, actions, and responses with simple point-and-click setup.",
      color: "nexus-purple"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Deploy Everywhere",
      description: "Launch your agent instantly across web, mobile, WhatsApp, or generate a public link to share with your team and customers.",
      color: "nexus-glow"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-nexus-blue/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-nexus-purple/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">How It </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From concept to deployment in just three simple steps. No technical expertise required -
              our platform handles all the complexity while you focus on creating amazing AI experiences.
            </p>
          </div>

          {/* Steps flow */}
          <div className="relative">
            {/* Connection lines for desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-nexus-blue via-nexus-purple to-nexus-glow opacity-30" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, index) => (
                <div key={step.number} className="relative group animate-fade-in-up" style={{ animationDelay: `${index * 0.3}s` }}>
                  {/* Step card */}
                  <div className="bg-card border border-border rounded-lg p-8 hover:shadow-card transition-all duration-300 hover:scale-105 relative z-10">
                    {/* Step number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-nexus-dark font-bold text-lg shadow-glow">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mb-6 relative">
                      <step.icon className={`h-16 w-16 text-${step.color} group-hover:animate-float transition-all duration-300`} />
                      <div className={`absolute inset-0 h-16 w-16 bg-${step.color}/10 rounded-lg blur-lg group-hover:bg-${step.color}/20 transition-all duration-300`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-nexus-glow transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-6 z-20">
                      <ArrowRight className="h-6 w-6 text-nexus-blue/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Interactive demo teaser */}
          <div className="mt-20 text-center animate-fade-in-up">
            <div className="bg-gradient-glow border border-border rounded-lg p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-foreground">See It In Action</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Watch our interactive demo to see how easy it is to build powerful AI agents
                that can revolutionize your business processes in minutes, not months.
              </p>

              {/* Demo preview placeholder */}
              <div className="bg-nexus-darker rounded-lg p-8 mb-8 relative overflow-hidden group cursor-pointer hover:shadow-glow transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-primary opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative z-10 flex items-center justify-center h-32">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="h-8 w-8 text-nexus-dark" />
                  </div>
                </div>
                <p className="text-muted-foreground">Click to watch interactive demo</p>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="bg-gradient-primary text-nexus-dark px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                    Try Interactive Demo
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;