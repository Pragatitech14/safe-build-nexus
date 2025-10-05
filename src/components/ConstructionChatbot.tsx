import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, X } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ConstructionChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your construction safety assistant. Ask me anything about construction safety, regulations, or best practices.",
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
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-hero text-white rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-card border border-border rounded-2xl shadow-xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-hero text-white p-4 rounded-t-2xl flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">Safety Assistant</h3>
              <p className="text-xs text-white/80">Ask about construction safety</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about safety..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConstructionChatbot;
