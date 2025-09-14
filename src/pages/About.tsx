import { Target, Users, Wrench, AlertTriangle } from "lucide-react";

const About = () => {
  const technologies = [
    "React.js", "TensorFlow", "Computer Vision", "Machine Learning",
    "Node.js", "MongoDB", "WebRTC", "Socket.io", "Three.js"
  ];

  const goals = [
    {
      icon: AlertTriangle,
      title: "Reduce Workplace Accidents",
      description: "Minimize construction site injuries through proactive safety monitoring and real-time alerts"
    },
    {
      icon: Target,
      title: "Improve Compliance",
      description: "Ensure consistent adherence to safety protocols and regulatory requirements"
    },
    {
      icon: Users,
      title: "Enhance Training",
      description: "Provide comprehensive, interactive safety training that adapts to individual learning needs"
    },
    {
      icon: Wrench,
      title: "Streamline Operations",
      description: "Integrate safety management seamlessly into daily construction workflows"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Our Project
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming construction safety through innovative AI technology and comprehensive management systems
          </p>
        </div>

        {/* Problem Statement */}
        <section className="mb-16 animate-slide-up">
          <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              <AlertTriangle className="h-8 w-8 text-destructive mr-3" />
              Problems faced by Workers
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Construction sites are among the most dangerous work environments, with workers facing numerous safety hazards daily. 
                Traditional safety management relies heavily on manual monitoring and periodic inspections, leading to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>High accident rates due to inconsistent PPE compliance</li>
                <li>Inadequate real-time safety monitoring</li>
                <li>Limited accessibility to comprehensive safety training</li>
                <li>Delayed emergency response times</li>
                <li>Insufficient safety protocol awareness among workers</li>
              </ul>
              <p>
                Our Smart Construction Safety Management System addresses these critical challenges through innovative AI-powered solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Project Goals */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Project Goals
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal, index) => (
              <div 
                key={goal.title}
                className="feature-card text-center animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <goal.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {goal.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Used */}
        <section className="mb-16 animate-slide-up">
          <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Technologies Used
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our system leverages cutting-edge technologies to deliver robust, scalable, and intelligent safety solutions:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={tech}
                  className="bg-background border border-border rounded-lg p-4 text-center hover:shadow-soft transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="font-medium text-foreground">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team & Ownership */}
        <section className="animate-fade-in">
          <div className="bg-gradient-professional rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Team & Ownership
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Project Development</h3>
                <p className="text-white/90 mb-4">
                  This Smart Construction Safety Management System was developed as part of an advanced software engineering project, 
                  focusing on real-world applications of AI and machine learning in industrial safety.
                </p>
                <p className="text-white/90">
                  The project demonstrates the integration of computer vision, natural language processing, and web technologies 
                  to create a comprehensive safety management platform.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
                <ul className="text-white/90 space-y-2">
                  <li>• Full-stack web development</li>
                  <li>• AI/ML model development and deployment</li>
                  <li>• Computer vision and image processing</li>
                  <li>• Real-time communication systems</li>
                  <li>• Database design and optimization</li>
                  <li>• UI/UX design for industrial applications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;