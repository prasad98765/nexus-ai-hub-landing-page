import { Brain, Link, Globe } from 'lucide-react';

const AboutSection = () => {
  const concepts = [
    {
      icon: Link,
      title: "Nexus",
      description: "The central connection point where all your tools, data, and AI systems unite seamlessly."
    },
    {
      icon: Brain,
      title: "AI",
      description: "Intelligent agents that learn, adapt, and execute complex tasks with human-like reasoning."
    },
    {
      icon: Globe,
      title: "Hub",
      description: "Your command center for building, managing, and deploying AI solutions across all platforms."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-nexus-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-nexus-blue/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">About </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Nexus AI Hub</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing how businesses interact with AI by creating the world's first 
              truly integrated AI ecosystem where every tool, every data source, and every AI capability 
              works together in perfect harmony.
            </p>
          </div>

          {/* Concept cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {concepts.map((concept, index) => (
              <div 
                key={concept.title}
                className="group relative bg-card border border-border rounded-lg p-8 hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="mb-6 relative">
                    <concept.icon className="h-12 w-12 text-nexus-blue group-hover:text-nexus-glow transition-colors duration-300" />
                    <div className="absolute inset-0 h-12 w-12 bg-nexus-blue/10 rounded-lg blur-lg group-hover:bg-nexus-blue/20 transition-all duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{concept.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{concept.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mission statement */}
          <div className="text-center bg-card border border-border rounded-lg p-8 md:p-12 animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              <span className="text-nexus-blue font-semibold">Build intelligent agents, integrate everything.</span> 
              {" "}We believe the future belongs to businesses that can seamlessly connect their AI capabilities 
              with their existing tools and workflows. Nexus AI Hub makes this vision a reality by providing 
              the most intuitive, powerful, and comprehensive AI integration platform ever created.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;