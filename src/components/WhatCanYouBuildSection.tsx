import { TrendingUp, Users, MapPin, Dumbbell, MessageCircle, Target, Mail, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WhatCanYouBuildSection = () => {
    const useCases = [
        {
            icon: Users,
            title: "Customer Support Agents",
            description: "24/7 intelligent support that learns from interactions"
        },
        {
            icon: MapPin,
            title: "Travel Planners",
            description: "Personalized itinerary creation based on preferences"
        },
        {
            icon: Dumbbell,
            title: "AI Fitness Coaches",
            description: "Custom workout plans and nutrition guidance"
        },
        {
            icon: MessageCircle,
            title: "Sales Chatbots",
            description: "Convert leads with intelligent conversations"
        },
        {
            icon: Target,
            title: "Lead Generation",
            description: "Automated prospecting and qualification"
        },
        {
            icon: Mail,
            title: "Email Summarization",
            description: "Smart inbox management and priority sorting"
        }
    ];

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-nexus-darker to-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-nexus-purple/5 rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-nexus-blue/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                        <span className="text-foreground">What Can You Build with </span>
                        <span className="bg-gradient-primary bg-clip-text text-transparent">Nexus AI Agents?</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        With Nexus AI Hub, you can build powerful AI agents tailored to your specific needs. Here are some examples:
                    </p>
                </div>

                {/* Featured Example - Stock Market Agent */}
                <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
                    <Card className="bg-card/50 backdrop-blur-sm border-nexus-blue/20 hover:border-nexus-blue/40 transition-all duration-300 magnetic-card">
                        <CardHeader className="text-center pb-4">
                            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                                <TrendingUp className="h-8 w-8 text-white" />
                            </div>
                            <CardTitle className="text-2xl sm:text-3xl font-bold text-nexus-blue">
                                💡 Stock Market Agent
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-lg text-muted-foreground text-center mb-6">
                                An intelligent agent that gives you:
                            </p>
                            <div className="grid gap-4 sm:gap-6">
                                <div className="flex items-start gap-3 p-4 bg-nexus-blue/10 rounded-lg border border-nexus-blue/20">
                                    <div className="w-2 h-2 bg-nexus-blue rounded-full mt-2 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-foreground">Daily Market Updates</p>
                                        <p className="text-sm text-muted-foreground">Get top stocks and market trends delivered daily</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-nexus-purple/10 rounded-lg border border-nexus-purple/20">
                                    <div className="w-2 h-2 bg-nexus-purple rounded-full mt-2 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-foreground">Personalized Investment Advice</p>
                                        <p className="text-sm text-muted-foreground">Recommendations based on your daily budget and goals</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-nexus-glow/10 rounded-lg border border-nexus-glow/20">
                                    <div className="w-2 h-2 bg-nexus-glow rounded-full mt-2 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium text-foreground">Adaptive Learning</p>
                                        <p className="text-sm text-muted-foreground">Learns your preferences and improves suggestions over time</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-6 p-4 bg-gradient-glow rounded-lg border border-nexus-blue/30">
                                <p className="font-semibold text-nexus-blue">
                                    And yes—you can <span className="text-nexus-glow">train it your way</span> using custom rules and data!
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Use Cases Grid */}
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
                        <span className="text-foreground">💼 Use Cases Are </span>
                        <span className="text-nexus-glow">Endless</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {useCases.map((useCase, index) => (
                            <Card
                                key={index}
                                className="bg-card/50 backdrop-blur-sm border-nexus-blue/20 hover:border-nexus-blue/40 transition-all duration-300 magnetic-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardHeader className="text-center">
                                    <div className="w-12 h-12 mx-auto mb-3 bg-nexus-blue/20 rounded-lg flex items-center justify-center group-hover:bg-nexus-blue/30 transition-colors">
                                        <useCase.icon className="h-6 w-6 text-nexus-blue" />
                                    </div>
                                    <CardTitle className="text-lg font-semibold text-foreground">
                                        {useCase.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-muted-foreground text-center">
                                        {useCase.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12 sm:mt-16">
                    <div className="inline-flex items-center gap-2 p-4 bg-gradient-glow rounded-lg border border-nexus-glow/30">
                        <Lightbulb className="h-6 w-6 text-nexus-glow animate-pulse" />
                        <p className="text-lg font-semibold text-foreground">
                            If you can imagine it, you can build it here.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatCanYouBuildSection;