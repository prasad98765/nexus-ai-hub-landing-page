import { useState, useEffect } from 'react';
import { Search, Filter, Sparkles, Brain, Briefcase, FileText, Zap, ExternalLink, Star, Users, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import ParticleBackground from '@/components/ParticleBackground';

const AIHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Counter animation effect
  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll('.counter[data-target]');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        const element = counter as HTMLElement;
        let current = 0;
        const increment = target / 100;
        
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            element.textContent = Math.ceil(current) + '+';
            setTimeout(updateCounter, 20);
          } else {
            element.textContent = target + '+';
          }
        };
        
        // Start animation after a delay
        setTimeout(updateCounter, 1000);
      });
    };

    animateCounters();
  }, []);

  // Mock data for different categories
  const aiTools =[
  {
    "id": 1,
    "name": "ChatGPT",
    "description": "OpenAI's advanced conversational AI, supports writing, code, web browsing, vision",
    "category": "Conversational AI",
    "rating": 4.8,
    "users": "100M+",
    "pricing": "Freemium",
    "tags": ["AI Chat", "Writing", "Code"],
    "url": "https://chat.openai.com",
    "featured": true
  },
  {
    "id": 2,
    "name": "Midjourney",
    "description": "AI‑powered image generation and creative art creation",
    "category": "Image Generation",
    "rating": 4.7,
    "users": "20M+",
    "pricing": "Paid",
    "tags": ["Art", "Design", "Creative"],
    "url": "https://midjourney.com",
    "featured": true
  },
  {
    "id": 3,
    "name": "Claude",
    "description": "Anthropic’s AI assistant, strong contextual understanding and coding",
    "category": "Conversational AI",
    "rating": 4.6,
    "users": "10M+",
    "pricing": "Freemium",
    "tags": ["AI Chat", "Analysis", "Writing"],
    "url": "https://claude.ai",
    "featured": false
  },
  {
    "id": 4,
    "name": "GitHub Copilot",
    "description": "AI pair programmer for code completion and developer productivity",
    "category": "Development",
    "rating": 4.5,
    "users": "5M+",
    "pricing": "Paid",
    "tags": ["Coding", "Development", "Productivity"],
    "url": "https://github.com/features/copilot",
    "featured": false
  },
  {
    "id": 5,
    "name": "Gemini (Google)",
    "description": "Google’s flagship multimodal assistant integrated across search and services",
    "category": "Conversational AI",
    "rating": 4.7,
    "users": "450M+ monthly users",
    "pricing": "Freemium",
    "tags": ["AI Chat", "Multimodal", "Search"],
    "url": "https://ai.google/gemini",
    "featured": true
  },
  {
    "id": 6,
    "name": "DeepSeek",
    "description": "Open‑source LLM (DeepSeek‑R1) offering math, code, reasoning tasks",
    "category": "Research / LLM",
    "rating": 4.4,
    "users": "growing user base",
    "pricing": "Free / Open Source",
    "tags": ["LLM", "Research", "Open Source"],
    "url": "https://deepseek-ai.org",
    "featured": false
  },
  {
    "id": 7,
    "name": "Qwen (Alibaba)",
    "description": "Alibaba’s open‑access general AI model (Qwen 2.5 Max)",
    "category": "Conversational AI / LLM",
    "rating": 4.3,
    "users": "research and enterprise use",
    "pricing": "Free / Open Source",
    "tags": ["LLM", "Conversational", "Open Source"],
    "url": "https://qwen.ai",
    "featured": false
  },
  {
    "id": 8,
    "name": "Perplexity",
    "description": "AI‑powered real‑time research assistant and search engine",
    "category": "Search / Research",
    "rating": 4.5,
    "users": "tens of millions",
    "pricing": "Freemium",
    "tags": ["Search", "Research", "Conversational"],
    "url": "https://perplexity.ai",
    "featured": false
  },
  {
    "id": 9,
    "name": "ElevenLabs",
    "description": "High‑fidelity text‑to‑speech and voice cloning with emotional nuance",
    "category": "Voice / Speech",
    "rating": 4.6,
    "users": "millions",
    "pricing": "Freemium",
    "tags": ["Text‑to‑Speech", "Voice", "Cloning"],
    "url": "https://elevenlabs.io",
    "featured": false
  },
  {
    "id": 10,
    "name": "Runway ML",
    "description": "AI tools for storytelling, video editing, and generative media",
    "category": "Video / Creative",
    "rating": 4.5,
    "users": "hundreds of thousands",
    "pricing": "Paid",
    "tags": ["Video", "Image Generation", "Creative"],
    "url": "https://runway.com",
    "featured": false
  },
  {
    "id": 11,
    "name": "Synthesia",
    "description": "AI video generation platform with avatar‑based multilingual support",
    "category": "Video Generation",
    "rating": 4.4,
    "users": "1M+ users",
    "pricing": "Paid",
    "tags": ["Video", "Avatars", "Generative AI"],
    "url": "https://www.synthesia.io",
    "featured": false
  },
  {
    "id": 12,
    "name": "Lumio AI",
    "description": "India‑based multi‑model AI interface combining ChatGPT, Gemini, Claude, Grok, DeepSeek",
    "category": "Multi‑LLM Platform",
    "rating": 4.2,
    "users": "growing",
    "pricing": "Freemium",
    "tags": ["Multi‑model", "Assistant", "Comparison"],
    "url": "https://www.lumioai.tech",
    "featured": false
  },
  {
    "id": 13,
    "name": "Cursor",
    "description": "AI‑powered coding assistant integrated into IDEs to automate programming tasks",
    "category": "Development",
    "rating": 4.4,
    "users": "rapidly growing",
    "pricing": "Paid",
    "tags": ["Coding", "IDE", "Productivity"],
    "url": "https://cursor.com",
    "featured": false
  },
  {
    "id": 14,
    "name": "Adobe Firefly",
    "description": "Adobe Creative Cloud’s generative AI for text-to-image and video, integrated into Photoshop/Express with brand‑safe output",
    "category": "Image & Video Generation",
    "rating": 4.7,
    "users": "Millions (Creative Cloud users)",
    "pricing": "Paid (Creative Cloud subscription)",
    "tags": ["Text-to‑Image", "Text-to‑Video", "Design"],
    "url": "https://firefly.adobe.com",
    "featured": true
  },
  {
    "id": 15,
    "name": "Google Veo 3",
    "description": "DeepMind’s state-of-the-art text-to-video + native audio generation model, available via Vertex AI",
    "category": "Video Generation",
    "rating": 4.8,
    "users": "Enterprise users via Vertex AI",
    "pricing": "Paid (Vertex AI pricing)",
    "tags": ["Text-to‑Video", "Lip‑Sync", "Sound Effects"],
    "url": "https://cloud.google.com/vertex-ai",
    "featured": true
  },
  {
    "id": 16,
    "name": "Runway (Gen‑3 / Gen‑4)",
    "description": "AI tools for creators: text-to-video, image-to-video, motion capture and powerful editing features",
    "category": "Video / Creative",
    "rating": 4.6,
    "users": "Hundreds of thousands",
    "pricing": "Freemium / Paid",
    "tags": ["Video Editing", "Image-to‑Video", "Design"],
    "url": "https://runway.com",
    "featured": false
  },
  {
    "id": 17,
    "name": "Synthesia",
    "description": "Avatar-based video generation platform: text-to-video in 120+ languages without filming",
    "category": "Video Generation",
    "rating": 4.5,
    "users": "1M+",
    "pricing": "Paid",
    "tags": ["Avatars", "Training", "Corporate Video"],
    "url": "https://www.synthesia.io",
    "featured": false
  },
  {
    "id": 18,
    "name": "Freepik AI",
    "description": "Freepik’s text-to-image and image-to-video AI tools plus background remover, upscaler and voice generation",
    "category": "Design & Media",
    "rating": 4.4,
    "users": "Millions",
    "pricing": "Freemium",
    "tags": ["Image Generator", "Video Generator", "Templates"],
    "url": "https://www.freepik.com",
    "featured": false
  },
  {
    "id": 19,
    "name": "Recraft",
    "description": "Professional-grade AI image generation tailored to brand consistency, text fidelity and layout control",
    "category": "Image Generation",
    "rating": 4.5,
    "users": "4M+",
    "pricing": "Paid",
    "tags": ["Design Workflow", "Brand Control", "Vector Graphics"],
    "url": "https://recraft.ai",
    "featured": false
  },
  {
    "id": 20,
    "name": "Magicshot.ai",
    "description": "Fast and easy image-to-video AI generator—convert images into animated clips in seconds",
    "category": "Image-to-Video",
    "rating": 4.3,
    "users": "Growing",
    "pricing": "Paid / Affordable plans",
    "tags": ["Image-to‑Video", "Quick Clips", "Social Content"],
    "url": "https://magicshot.ai",
    "featured": false
  },
  {
    "id": 21,
    "name": "Pika Labs",
    "description": "AI-powered image-to-video creation tool for visual storytelling and concept animation",
    "category": "Image-to-Video",
    "rating": 4.3,
    "users": "Wide adoption",
    "pricing": "Free trial / Paid tiers",
    "tags": ["Concept Art", "Motion Graphics", "Short Clips"],
    "url": "https://pikalabs.ai",
    "featured": false
  },
  {
    "id": 22,
    "name": "Kaiber",
    "description": "Custom-style animation tool converting still images into short stylized videos, ideal for concept/music videos",
    "category": "Image-to-Video",
    "rating": 4.4,
    "users": "Growing",
    "pricing": "Free trial / Paid",
    "tags": ["Stylistic Animation", "Music-video", "Visual Storytelling"],
    "url": "https://kaiber.ai",
    "featured": false
  },
  {
    "id": 23,
    "name": "Open‑Sora",
    "description": "Open‑source generative video model supporting text/image-to-video up to 720p, democratizing video synthesis",
    "category": "Open Source Video",
    "rating": 4.2,
    "users": "Community & research",
    "pricing": "Free / Open Source",
    "tags": ["Text-to‑Video", "Image-to‑Video", "Research"],
    "url": "https://github.com/hpcaitech/Open-Sora",
    "featured": false
  },
  {
    "id": 24,
    "name": "Grok Imagine (xAI)",
    "description": "xAI’s generative image & video tool supporting text-to-image and image-to-video with “spicy” mode animations",
    "category": "Image & Video Generation",
    "rating": 4.1,
    "users": "Tens of millions",
    "pricing": "Premium mobile subscription",
    "tags": ["Text-to‑Image", "Image-to‑Video", "Different Modes"],
    "url": "https://grok.x.ai",
    "featured": false
  }
]


  const aiNews = [
    {
      id: 1,
      title: 'OpenAI Announces GPT-5 with Revolutionary Capabilities',
      excerpt: 'The latest model shows unprecedented reasoning abilities...',
      date: '2024-01-15',
      category: 'Product Launch',
      readTime: '5 min',
      source: 'OpenAI Blog'
    },
    {
      id: 2,
      title: 'Google\'s Gemini Ultra Surpasses Human Performance',
      excerpt: 'New benchmarks show AI exceeding human capabilities...',
      date: '2024-01-14',
      category: 'Research',
      readTime: '3 min',
      source: 'Google DeepMind'
    },
  ];

  const aiJobs = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      company: 'TechCorp AI',
      location: 'San Francisco, CA',
      salary: '$180k - $250k',
      type: 'Full-time',
      posted: '2 days ago',
      skills: ['Python', 'TensorFlow', 'ML', 'NLP']
    },
    {
      id: 2,
      title: 'Machine Learning Researcher',
      company: 'DeepMind',
      location: 'London, UK',
      salary: '£120k - £180k',
      type: 'Full-time',
      posted: '1 week ago',
      skills: ['Research', 'PyTorch', 'Computer Vision', 'PhD']
    },
  ];

  const aiModels = [
    {
      id: 1,
      name: 'GPT-4 Turbo',
      provider: 'OpenAI',
      type: 'Language Model',
      parameters: '1.76T',
      pricing: '$0.01/1K tokens',
      capabilities: ['Text Generation', 'Code', 'Analysis'],
      apiAvailable: true
    },
    {
      id: 2,
      name: 'Claude-3 Opus',
      provider: 'Anthropic',
      type: 'Language Model',
      parameters: 'Unknown',
      pricing: '$15/1M tokens',
      capabilities: ['Reasoning', 'Math', 'Coding'],
      apiAvailable: true
    },
  ];

  const prompts = [
    {
      id: 1,
      title: 'Business Plan Generator',
      description: 'Create comprehensive business plans with market analysis',
      category: 'Business',
      likes: 1247,
      author: 'Sarah Chen',
      difficulty: 'Intermediate',
      prompt: 'Create a detailed business plan for [BUSINESS_IDEA] including...'
    },
    {
      id: 2,
      title: 'Code Review Assistant',
      description: 'Automated code review with improvement suggestions',
      category: 'Development',
      likes: 892,
      author: 'Alex Kumar',
      difficulty: 'Advanced',
      prompt: 'Review the following code and provide detailed feedback...'
    },
  ];

  const filteredTools = aiTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
      tool.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Header />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-nexus-blue/10 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="h-5 w-5 text-nexus-blue" />
              <span className="text-nexus-blue font-medium">AI Tools Directory</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glitch-text">
              <span className="text-foreground">Discover the</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Future of AI</span>
            </h1>
            
            {/* <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Your ultimate destination for AI tools, news, jobs, models, and prompts. 
              Stay ahead in the AI revolution.
            </p> */}

            {/* Search Bar */}
            {/* <div className="max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Search AI tools, models, prompts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg magnetic-input"
                />
              </div>
            </div> */}

            {/* Quick Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center floating-card">
                <div className="text-3xl font-bold text-nexus-blue counter" data-target="500">0+</div>
                <div className="text-muted-foreground">AI Tools</div>
              </div>
              <div className="text-center floating-card" style={{ animationDelay: '0.1s' }}>
                <div className="text-3xl font-bold text-nexus-purple counter" data-target="200">0+</div>
                <div className="text-muted-foreground">AI Models</div>
              </div>
              <div className="text-center floating-card" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-nexus-green counter" data-target="1000">0+</div>
                <div className="text-muted-foreground">Prompts</div>
              </div>
              <div className="text-center floating-card" style={{ animationDelay: '0.3s' }}>
                <div className="text-3xl font-bold text-nexus-orange counter" data-target="50">0+</div>
                <div className="text-muted-foreground">Daily Updates</div>
              </div>
            </div>*/}
          </div> 
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <Tabs defaultValue="tools" className="w-full"
                  key="ai-hub-tabs">
              {/* <TabsList className="grid w-full grid-cols-5 mb-8 bg-card/50 backdrop-blur-md">
                <TabsTrigger value="tools" className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  AI Tools
                </TabsTrigger>
                <TabsTrigger value="news" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  News
                </TabsTrigger>
                <TabsTrigger value="jobs" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Jobs
                </TabsTrigger>
                <TabsTrigger value="models" className="flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  Models
                </TabsTrigger>
                <TabsTrigger value="prompts" className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Prompts
                </TabsTrigger>
              </TabsList> */}

              {/* AI Tools Tab */}
              <TabsContent value="tools" className="space-y-6">
                {/* <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full md:w-64">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="conversational">Conversational AI</SelectItem>
                      <SelectItem value="image">Image Generation</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="writing">Writing</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    More Filters
                  </Button>
                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTools.map((tool, index) => (
                    <Card key={tool.id} className="group hover:shadow-glow transition-all duration-300 magnetic-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              {tool.name}
                              {tool.featured && <Badge variant="default" className="bg-nexus-blue text-white">Featured</Badge>}
                            </CardTitle>
                            <CardDescription>{tool.description}</CardDescription>
                          </div>
                          <Button onClick={() => window.open(tool.url,"blank")} size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Rating</span>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>{tool.rating}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Users</span>
                            <span>{tool.users}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Pricing</span>
                            <Badge variant="outline">{tool.pricing}</Badge>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {tool.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button onClick={() => window.open(tool.url,"blank")} className="w-full magnetic-button ripple">
                          Try Now
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* AI News Tab */}
              <TabsContent value="news" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {aiNews.map((news, index) => (
                    <Card key={news.id} className="group hover:shadow-glow transition-all duration-300 magnetic-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <Badge variant="outline">{news.category}</Badge>
                            <CardTitle className="group-hover:text-nexus-blue transition-colors">{news.title}</CardTitle>
                            <CardDescription>{news.excerpt}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardFooter className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {news.date}
                          </span>
                          <span>{news.readTime}</span>
                          <span>{news.source}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="magnetic-button">
                          Read More
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* AI Jobs Tab */}
              <TabsContent value="jobs" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {aiJobs.map((job, index) => (
                    <Card key={job.id} className="group hover:shadow-glow transition-all duration-300 magnetic-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardHeader>
                        <CardTitle className="group-hover:text-nexus-blue transition-colors">{job.title}</CardTitle>
                        <CardDescription className="space-y-1">
                          <div className="font-medium">{job.company}</div>
                          <div className="text-sm">{job.location} • {job.type}</div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-nexus-green">{job.salary}</span>
                            <span className="text-sm text-muted-foreground">{job.posted}</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {job.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full magnetic-button ripple">
                          Apply Now
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* AI Models Tab */}
              <TabsContent value="models" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {aiModels.map((model, index) => (
                    <Card key={model.id} className="group hover:shadow-glow transition-all duration-300 magnetic-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span className="group-hover:text-nexus-blue transition-colors">{model.name}</span>
                          {model.apiAvailable && <Badge className="bg-nexus-green text-white">API</Badge>}
                        </CardTitle>
                        <CardDescription>
                          <div>{model.provider} • {model.type}</div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Parameters</span>
                            <span>{model.parameters}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Pricing</span>
                            <span className="font-medium">{model.pricing}</span>
                          </div>
                          <div className="space-y-2">
                            <span className="text-sm text-muted-foreground">Capabilities:</span>
                            <div className="flex flex-wrap gap-1">
                              {model.capabilities.map((capability) => (
                                <Badge key={capability} variant="outline" className="text-xs">{capability}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1 magnetic-button ripple">
                          Try Model
                        </Button>
                        <Button variant="outline" className="magnetic-button">
                          View Docs
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Prompts Tab */}
              <TabsContent value="prompts" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {prompts.map((prompt, index) => (
                    <Card key={prompt.id} className="group hover:shadow-glow transition-all duration-300 magnetic-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardHeader>
                        <CardTitle className="group-hover:text-nexus-blue transition-colors">{prompt.title}</CardTitle>
                        <CardDescription>{prompt.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <Badge variant="outline">{prompt.category}</Badge>
                            <Badge className={`${prompt.difficulty === 'Advanced' ? 'bg-red-500' : prompt.difficulty === 'Intermediate' ? 'bg-yellow-500' : 'bg-green-500'} text-white`}>
                              {prompt.difficulty}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">By {prompt.author}</span>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-400" />
                              <span>{prompt.likes}</span>
                            </div>
                          </div>
                          <div className="bg-muted/50 rounded-lg p-3 text-sm font-mono">
                            {prompt.prompt.substring(0, 100)}...
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button className="flex-1 magnetic-button ripple">
                          Copy Prompt
                        </Button>
                        <Button variant="outline" className="magnetic-button">
                          <Star className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AIHub;