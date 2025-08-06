import { ArrowRight, Sparkles, Cpu, Network, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-nexus-dark to-nexus-darker pt-16 sm:pt-20">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="h-6 w-6 text-nexus-blue/30" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <Cpu className="h-8 w-8 text-nexus-purple/30" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
          <Network className="h-7 w-7 text-nexus-glow/30" />
        </div>
        
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nexus-blue/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-nexus-purple/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up " style={{ marginTop: '20px' }}>
          {/* Main headline */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-2 sm:px-4">
            <span className="text-foreground">Build Intelligent</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">AI Agents</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-foreground">That</span>
            <span className="text-nexus-glow"> Connect Everything</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-6">
            Where all your AI, tools, and data converge. Create powerful agents with drag-and-drop simplicity, 
            integrate any third-party service, and deploy everywhere.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 px-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  size="lg" 
                  className="magnetic-button ripple bg-gradient-primary hover:shadow-glow transition-all duration-300 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                >
                  Start Building Now
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-6 bg-card/95 backdrop-blur-md border-nexus-blue/20">
                <div className="text-center space-y-4">
                  <Rocket className="h-12 w-12 mx-auto text-nexus-blue animate-bounce" />
                  <h3 className="text-xl font-bold text-foreground">Platform Launching Soon!</h3>
                  <p className="text-muted-foreground">
                    Our Platform Launch soon in market. Be the first to experience the future of AI automation.
                  </p>
                  <div className="bg-nexus-blue/10 rounded-lg p-3">
                    <p className="text-sm text-nexus-blue font-medium">🚀 Early Access Available</p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="magnetic-button ripple border-nexus-blue/50 text-nexus-blue hover:bg-nexus-blue/10 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                >
                  Watch Interactive Demo
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-6 bg-card/95 backdrop-blur-md border-nexus-purple/20 animate-in fade-in-0 zoom-in-95 duration-200">
                <div className="text-center space-y-4">
                  <div className="h-12 w-12 mx-auto bg-nexus-purple/20 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-2xl">🎬</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">We're launching soon!</h3>
                  <p className="text-muted-foreground">
                    Want early access to the demo? Join our waitlist and be the first to experience the future of AI automation.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 bg-nexus-dark/50 border border-nexus-purple/30 rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-nexus-purple/50"
                    />
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-nexus-purple hover:bg-nexus-purple/80 text-white"
                        size="sm"
                      >
                        Join Waitlist
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-nexus-purple/30 text-nexus-purple hover:bg-nexus-purple/10"
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Stats or features preview */}
          <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-nexus-blue">∞</div>
              <div className="text-sm text-muted-foreground">Integrations</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-nexus-purple">⚡</div>
              <div className="text-sm text-muted-foreground">Instant Deploy</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-nexus-glow">🎯</div>
              <div className="text-sm text-muted-foreground">Zero Code</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-nexus-blue/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-nexus-blue rounded-full mt-2 animate-pulse" />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;