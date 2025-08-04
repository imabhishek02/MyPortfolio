import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const achievements = [
    "Developed high-performance RESTful APIs using Spring Boot, driving a 35% improvement in system scalability",
    "Refined database interactions with Hibernate ORM, achieving a 25% drop in query execution time",
    "Orchestrated AES-based encryption for user PII data, enhancing data security by 60-70%",
    "Performed troubleshooting and root-cause analysis across distributed microservices architecture",
    "Spearheaded automated JUnit tests that raised code coverage by 20% and shortened bug-detection time by 35%",
    "Collaborated with cross-functional teams under Agile methods, generating a 20% lift in user engagement"
  ];

  const technologies = [
    "Java", "Spring Boot", "PostgreSQL", "REST APIs", "Hibernate", "Microservices", "JUnit", "Agile"
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Building scalable solutions and driving technical excellence in enterprise environments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Building2 className="text-blue-600 mr-2" size={20} />
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                      Tata Consultancy Services
                    </h3>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    Software Developer
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                    <div className="flex items-center text-slate-600 dark:text-slate-300">
                      <Calendar className="mr-1" size={16} />
                      <span>Nov 2023 – Present</span>
                    </div>
                    <div className="flex items-center text-slate-600 dark:text-slate-300">
                      <MapPin className="mr-1" size={16} />
                      <span>Mumbai, India</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                  Key Technologies
                </h5>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
                  Key Achievements
                </h5>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600 dark:text-slate-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
