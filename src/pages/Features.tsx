import { Shield, GraduationCap, Bot, Camera, Users, MessageSquare, CheckCircle, AlertTriangle, BookOpen } from "lucide-react";
import ConstructionChatbot from "@/components/ConstructionChatbot";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "PPE Detection System",
      description: "Advanced AI-powered computer vision system for real-time personal protective equipment monitoring",
      color: "text-construction-orange",
      bgColor: "bg-construction-orange/10",
      capabilities: [
        "Real-time helmet detection with 99%+ accuracy",
        "Safety vest and protective gear recognition",
        "Automated compliance reporting and alerts",
        "Integration with existing security camera systems",
        "Custom PPE training for specific equipment",
        "Multi-worker simultaneous monitoring"
      ],
      icon2: Camera
    },
    {
      icon: GraduationCap,
      title: "Virtual Training Module",
      description: "Immersive, interactive safety training platform designed specifically for construction environments",
      color: "text-construction-blue",
      bgColor: "bg-construction-blue/10",
      capabilities: [
        "3D virtual construction site environments",
        "Scenario-based safety training simulations",
        "Progress tracking and certification management",
        "Multi-language support for diverse teams",
        "Customizable training modules for specific sites",
        "Performance analytics and improvement recommendations"
      ],
      icon2: BookOpen
    },
    {
      icon: Bot,
      title: "AI Safety Chatbot",
      description: "Intelligent conversational AI assistant providing 24/7 safety guidance and emergency support",
      color: "text-safety-yellow",
      bgColor: "bg-safety-yellow/10",
      capabilities: [
        "Instant safety protocol guidance and advice",
        "Emergency procedure step-by-step assistance",
        "Regulatory compliance information lookup",
        "Incident reporting and documentation support",
        "Multi-language communication capabilities",
        "Integration with emergency response systems"
      ],
      icon2: MessageSquare
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            System Features
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive safety management through three integrated modules designed to protect and educate construction workers
          </p>
        </div>

        {/* Features */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <section 
              key={feature.title}
              className={`animate-slide-up ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-soft">
                <div className="lg:flex">
                  {/* Content */}
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mr-4`}>
                        <feature.icon className={`h-8 w-8 ${feature.color}`} />
                      </div>
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                          {feature.title}
                        </h2>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-8">
                      {feature.description}
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Key Capabilities
                      </h3>
                      <ul className="space-y-3">
                        {feature.capabilities.map((capability, capIndex) => (
                          <li 
                            key={capIndex}
                            className="flex items-start text-muted-foreground"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="lg:w-1/2 p-8 lg:p-12 flex items-center justify-center">
                    {feature.title === "AI Safety Chatbot" ? (
                      <div className="w-full max-w-md bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
                        {/* Chatbot Demo Header */}
                        <div className={`${feature.bgColor} p-4 flex items-center gap-3`}>
                          <div className={`w-10 h-10 rounded-full ${feature.bgColor} border-2 border-current flex items-center justify-center`}>
                            <Bot className={`h-6 w-6 ${feature.color}`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Safety Assistant</h4>
                            <p className="text-xs text-muted-foreground">Always ready to help</p>
                          </div>
                        </div>
                        
                        {/* Demo Messages */}
                        <div className="p-4 space-y-3 bg-muted/30 h-64 overflow-y-auto">
                          <div className="flex justify-start">
                            <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${feature.bgColor}`}>
                              <p className="text-sm text-foreground">Hello! How can I help with safety today?</p>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-primary text-primary-foreground">
                              <p className="text-sm">What PPE is required?</p>
                            </div>
                          </div>
                          <div className="flex justify-start">
                            <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${feature.bgColor} animate-fade-in`}>
                              <p className="text-sm text-foreground">Required PPE includes: hard hats, safety glasses, high-visibility vests, steel-toed boots, and gloves.</p>
                            </div>
                          </div>
                          <div className="flex justify-start">
                            <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${feature.bgColor} animate-fade-in`}>
                              <p className="text-sm text-muted-foreground italic">🤖 Powered by AI - Available 24/7</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Demo Input */}
                        <div className="p-4 bg-card border-t border-border">
                          <div className="flex gap-2 items-center bg-muted rounded-lg px-3 py-2">
                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">Try the chatbot below →</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={`w-full max-w-md aspect-square rounded-3xl ${feature.bgColor} flex flex-col items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                        <feature.icon className={`h-24 w-24 ${feature.color} mb-6 relative z-10`} />
                        <feature.icon2 className={`h-16 w-16 ${feature.color} opacity-60 relative z-10`} />
                        <div className="absolute bottom-4 right-4">
                          <Users className={`h-8 w-8 ${feature.color} opacity-30`} />
                        </div>
                        <div className="absolute top-4 left-4">
                          <AlertTriangle className={`h-6 w-6 ${feature.color} opacity-40`} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Integration Section */}
        <section className="mt-20 text-center animate-fade-in">
          <div className="bg-gradient-hero rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Integrated Safety Ecosystem
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              All three modules work seamlessly together, sharing data and insights to create a comprehensive safety management platform 
              that adapts to your construction site's unique needs.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <span className="text-sm font-medium">Real-time Monitoring</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <span className="text-sm font-medium">Continuous Learning</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <span className="text-sm font-medium">Intelligent Support</span>
              </div>
            </div>
          </div>
        </section>

      </div>
      
      <ConstructionChatbot />
    </div>
  );
};

export default Features;