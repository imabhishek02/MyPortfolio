import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Database, Shield, Server, Code } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Quiz Application",
      description: "A robust microservices-based quiz platform with complete CRUD operations, service discovery, and centralized routing. Features authenticated user access and dynamic quiz flow.",
      icon: <Code className="text-blue-600" size={24} />,
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Eureka", "Feign", "Gateway", "Microservices"],
      highlights: [
        "Engineered and deployed on Render with high performance and scalability",
        "Designed RESTful APIs with complete CRUD operations",
        "Implemented quiz evaluation logic and inter-service communication using Feign Clients",
        "Integrated Eureka for service discovery and Spring Cloud Gateway for routing"
      ],
      githubUrl: "https://github.com/abhishek-rohit/quiz-application",
      category: "Microservices"
    },
    {
      title: "Blogging Application",
      description: "A comprehensive blogging platform with role-based access control, JWT authentication, and efficient content management. Features comment lifecycle management and optimized pagination.",
      icon: <Shield className="text-green-600" size={24} />,
      technologies: ["Java", "Spring Boot", "Spring Security", "Hibernate", "PostgreSQL", "JWT"],
      highlights: [
        "Empowered users to create and manage posts with category selection",
        "Enabled full comment lifecycle management (add, update, delete, view)",
        "Configured efficient pagination and sorting for faster query response times",
        "Developed role-based APIs for admin and users with secure JWT authentication"
      ],
      githubUrl: "https://github.com/abhishek-rohit/blogging-application",
      category: "Backend"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A showcase of my Java backend expertise in building scalable, secure, and efficient server-side applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {project.icon}
                    <CardTitle className="text-xl text-slate-800 dark:text-white">
                      {project.title}
                    </CardTitle>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {project.category}
                  </Badge>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-600 dark:text-slate-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" size={16} />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
