import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SafetyChatbot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your construction safety assistant. Ask me anything about construction safety, PPE, regulations, emergency procedures, or best practices.",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const faqResponses: Record<string, string> = {
    "ppe": "Personal Protective Equipment (PPE) is essential on construction sites. Required PPE typically includes: hard hats, safety glasses, high-visibility vests, steel-toed boots, gloves, and hearing protection. Always ensure your PPE is properly fitted and in good condition.",
    "helmet": "Hard hats must be worn at all times on construction sites. They protect against falling objects and head injuries. Ensure your helmet is properly fitted, not damaged, and meets ANSI Z89.1 standards.",
    "hard hat": "Hard hats must be worn at all times on construction sites. They protect against falling objects and head injuries. Ensure your helmet is properly fitted, not damaged, and meets ANSI Z89.1 standards.",
    "safety": "Construction safety is our top priority. Key safety measures include: wearing proper PPE, following site-specific safety protocols, maintaining clean work areas, proper tool usage, and reporting hazards immediately.",
    "emergency": "In case of emergency: 1) Call 911 immediately, 2) Alert your supervisor, 3) Evacuate if necessary following site evacuation routes, 4) Provide first aid if trained and safe to do so, 5) Document the incident.",
    "fall": "Fall protection is required when working at heights over 6 feet. Use proper fall protection equipment including harnesses, lanyards, and guardrails. Always inspect equipment before use and ensure proper anchorage points.",
    "scaffold": "Scaffold safety: Must be erected by qualified personnel, inspect daily before use, ensure proper guardrails and toe boards, maintain safe access/egress, never overload, and keep clear of power lines.",
    "hazard": "Report all hazards immediately to your supervisor. Common construction hazards include: falls, electrical hazards, struck-by incidents, caught-in/between hazards, and exposure to harmful substances.",
    "training": "Safety training is mandatory for all workers. Topics include: site-specific hazards, PPE usage, emergency procedures, equipment operation, and OSHA regulations. Refresher training is required annually.",
    "regulation": "Construction sites must comply with OSHA regulations, local building codes, and company safety policies. Key regulations cover fall protection, excavation, scaffolding, electrical safety, and PPE requirements.",
    "inspection": "Daily safety inspections should cover: equipment condition, PPE availability, site housekeeping, scaffolding integrity, electrical systems, and emergency equipment. Document all inspections.",
    "fire": "Fire safety: Keep fire extinguishers accessible, maintain clear evacuation routes, store flammable materials properly, no smoking in unauthorized areas, and know the location of fire assembly points.",
    "electrical": "Electrical safety: Use GFCI protection, inspect cords and tools daily, maintain safe distance from power lines, lock out/tag out equipment during maintenance, and only qualified electricians should work on electrical systems.",
    "excavation": "Excavation safety: Ensure proper shoring or sloping, check for underground utilities before digging, provide safe access/egress, keep spoil piles away from edges, and have a competent person inspect daily.",
    "ladder": "Ladder safety: Inspect before use, maintain 3-point contact, extend 3 feet above landing, secure at top and bottom, don't overreach, and use appropriate ladder for the task.",
    "first aid": "First aid: Know the location of first aid kits, report all injuries immediately, only provide first aid if trained, call 911 for serious injuries, and ensure incident is documented.",
  };

  const getResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    for (const [key, response] of Object.entries(faqResponses)) {
      if (lowerInput.includes(key)) {
        return response;
      }
    }
    
    return "I understand you have a question about construction safety. For specific guidance, please contact your site supervisor or safety officer. Common topics I can help with include: PPE, helmets, safety procedures, emergencies, fall protection, scaffolds, hazards, training, regulations, inspections, fire safety, electrical safety, excavation, ladders, and first aid.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const response = getResponse(input);
      const assistantMessage: Message = { role: "assistant", content: response };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 500);

    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/20 mb-4"
            onClick={() => navigate("/features")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Features
          </Button>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">AI Safety Assistant</h1>
              <p className="text-white/90">24/7 construction safety guidance and support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden h-[calc(100vh-300px)]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 h-[calc(100%-80px)]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-6 border-t border-border bg-card">
            <div className="flex gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about PPE, safety procedures, regulations..."
                className="flex-1 text-base"
              />
              <Button onClick={handleSend} size="lg" className="px-6">
                <Send className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              💡 Try asking: "What PPE is required?", "Fall protection guidelines", "Emergency procedures"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyChatbot;
