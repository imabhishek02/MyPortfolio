import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Server, Shield } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="text-blue-600" size={24} />,
      title: "Java Backend Development",
      description: "Expert in Java, Spring Boot, and enterprise backend technologies"
    },
    {
      icon: <Server className="text-green-600" size={24} />,
      title: "Microservices Architecture",
      description: "Experience with distributed systems and service discovery"
    },
    {
      icon: <Database className="text-purple-600" size={24} />,
      title: "Database Optimization",
      description: "PostgreSQL performance tuning and efficient query design"
    },
    {
      icon: <Shield className="text-red-600" size={24} />,
      title: "Security & Testing",
      description: "AES encryption implementation and comprehensive testing"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I'm a passionate Java backend developer with over a year of experience at Tata Consultancy Services, 
            specializing in enterprise backend systems and microservices architecture. I love building scalable 
            server-side applications and solving complex algorithmic problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4">{highlight.icon}</div>
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                    Professional Journey
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Currently working as a Java Software Developer at TCS Mumbai, where I've contributed to 
                    high-performance backend systems and enhanced application scalability by 35%. My focus 
                    is on building robust REST APIs, microservices, and implementing secure, efficient database solutions.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    I hold a B.Tech from Techno Main Saltlake with a CGPA of 8.95, 
                    and I'm passionate about competitive programming and continuous learning.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                    Technical Expertise
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Java & Spring Boot ecosystem
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Microservices with Eureka & Gateway
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      PostgreSQL & database optimization
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      REST API design & implementation
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Agile development & team collaboration
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
