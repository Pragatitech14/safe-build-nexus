import { Shield, GraduationCap, Bot, Camera, Users, MessageSquare, CheckCircle, AlertTriangle, BookOpen, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ConstructionChatbot from "@/components/ConstructionChatbot";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Features = () => {
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your construction safety assistant. Ask me anything about construction safety, regulations, or best practices.",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const faqResponses: Record<string, string> = {
    "ppe": "Personal Protective Equipment (PPE) is essential on construction sites. Required PPE typically includes: hard hats, safety glasses, high-visibility vests, steel-toed boots, gloves, and hearing protection. Always ensure your PPE is properly fitted and in good condition.",
    "helmet": "Hard hats must be worn at all times on construction sites. They protect against falling objects and head injuries. Ensure your helmet is properly fitted, not damaged, and meets ANSI Z89.1 standards.",
    "safety": "Construction safety is our top priority. Key safety measures include: wearing proper PPE, following site-specific safety protocols, maintaining clean work areas, proper tool usage, and reporting hazards immediately.",
    "emergency": "In case of emergency: 1) Call 911 immediately, 2) Alert your supervisor, 3) Evacuate if necessary following site evacuation routes, 4) Provide first aid if trained and safe to do so, 5) Document the incident.",
    "fall": "Fall protection is required when working at heights over 6 feet. Use proper fall protection equipment including harnesses, lanyards, and guardrails. Always inspect equipment before use and ensure proper anchorage points.",
    "scaffold": "Scaffold safety: Must be erected by qualified personnel, inspect daily before use, ensure proper guardrails and toe boards, maintain safe access/egress, never overload, and keep clear of power lines.",
    "hazard": "Report all hazards immediately to your supervisor. Common construction hazards include: falls, electrical hazards, struck-by incidents, caught-in/between hazards, and exposure to harmful substances.",
    "training": "Safety training is mandatory for all workers. Topics include: site-specific hazards, PPE usage, emergency procedures, equipment operation, and OSHA regulations. Refresher training is required annually.",
    "regulation": "Construction sites must comply with OSHA regulations, local building codes, and company safety policies. Key regulations cover fall protection, excavation, scaffolding, electrical safety, and PPE requirements.",
    "inspection": "Daily safety inspections should cover: equipment condition, PPE availability, site housekeeping, scaffolding integrity, electrical systems, and emergency equipment. Document all inspections.",
  };

  const getResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    for (const [key, response] of Object.entries(faqResponses)) {
      if (lowerInput.includes(key)) {
        return response;
      }
    }
    
    return "I understand you have a question about construction safety. For specific guidance, please contact your site supervisor or safety officer. Common topics I can help with include: PPE, helmets, safety procedures, emergencies, fall protection, scaffolds, hazards, training, regulations, and inspections.";
  };

  const handleChatSend = () => {
    if (!chatInput.trim()) return;

    const userMessage: Message = { role: "user", content: chatInput };
    setChatMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const response = getResponse(chatInput);
      const assistantMessage: Message = { role: "assistant", content: response };
      setChatMessages((prev) => [...prev, assistantMessage]);
    }, 500);

    setChatInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleChatSend();
    }
  };

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
                        {/* Chatbot Header */}
                        <div className={`${feature.bgColor} p-4 flex items-center gap-3`}>
                          <div className={`w-10 h-10 rounded-full ${feature.bgColor} border-2 border-current flex items-center justify-center`}>
                            <Bot className={`h-6 w-6 ${feature.color}`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Safety Assistant</h4>
                            <p className="text-xs text-muted-foreground">Ask me anything about safety</p>
                          </div>
                        </div>
                        
                        {/* Chat Messages */}
                        <div className="p-4 space-y-3 bg-muted/30 h-80 overflow-y-auto">
                          {chatMessages.map((message, index) => (
                            <div
                              key={index}
                              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                            >
                              <div
                                className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                                  message.role === "user"
                                    ? "bg-primary text-primary-foreground"
                                    : feature.bgColor + " text-foreground"
                                }`}
                              >
                                <p className="text-sm">{message.content}</p>
                              </div>
                            </div>
                          ))}
                          <div ref={messagesEndRef} />
                        </div>
                        
                        {/* Chat Input */}
                        <div className="p-4 bg-card border-t border-border">
                          <div className="flex gap-2">
                            <Input
                              value={chatInput}
                              onChange={(e) => setChatInput(e.target.value)}
                              onKeyPress={handleKeyPress}
                              placeholder="Ask about safety..."
                              className="flex-1"
                            />
                            <Button onClick={handleChatSend} size="icon" className="shrink-0">
                              <Send className="h-4 w-4" />
                            </Button>
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