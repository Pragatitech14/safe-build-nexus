import { Shield, Bot, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "PPE Detection",
      description: "AI-powered personal protective equipment detection and monitoring",
      color: "text-construction-orange",
      bgColor: "bg-construction-orange/10",
      link: "/features"
    },
    {
      icon: GraduationCap,
      title: "Virtual Training",
      description: "Immersive safety training modules for construction workers",
      color: "text-construction-blue",
      bgColor: "bg-construction-blue/10",
      link: "/features"
    },
    {
      icon: Bot,
      title: "Safety Chatbot",
      description: "24/7 AI assistant for safety queries and emergency protocols",
      color: "text-safety-yellow",
      bgColor: "bg-safety-yellow/10",
      link: "/features"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroBanner})` }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Smart Construction
              <span className="block bg-gradient-to-r from-safety-yellow to-white bg-clip-text text-transparent">
                Safety Management
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Revolutionizing workplace safety with AI-powered PPE detection, virtual training, and intelligent assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild className="btn-construction text-lg px-8 py-6">
                <Link to="/features">Explore Features</Link>
              </Button>
              <Button asChild className="bg-construction-orange hover:bg-construction-orange/90 text-white border-0 text-lg px-8 py-6">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building Safer Construction Sites
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              Our comprehensive safety management system combines cutting-edge AI technology with practical construction site needs, 
              ensuring worker safety through real-time monitoring, training, and intelligent assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Safety Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Three powerful modules working together to enhance construction site safety
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="feature-card text-center animate-bounce-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {feature.description}
                </p>
                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Link to={feature.link}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-professional">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Construction Safety?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join leading construction companies already using our smart safety management system
          </p>
          <Button asChild className="btn-construction text-lg px-8 py-6">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;