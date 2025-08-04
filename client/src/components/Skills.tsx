import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Technologies",
      icon: "🔧",
      skills: [
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "Hibernate/JPA", level: 80 },
        { name: "Spring Security", level: 75 },
        { name: "REST APIs", level: 88 }
      ]
    },
    {
      title: "Databases & Tools",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "RDBMS", level: 80 },
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Microservices", level: 75 }
      ]
    },
    {
      title: "Core Concepts",
      icon: "🧠",
      skills: [
        { name: "Data Structures & Algorithms", level: 92 },
        { name: "System Design", level: 75 },
        { name: "SOLID Principles", level: 85 },
        { name: "Multithreading", level: 78 },
        { name: "DBMS", level: 82 }
      ]
    }
  ];

  const certifications = [
    "Wings Java Tech Track Assessment - TCS",
    "Google Code Jam 2022 Qualified",
    "LeetCode Top 8.5% Global Ranking"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-white">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-slate-800 dark:text-white">
                🏆 Certifications & Recognition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-center">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-2">
                      {cert}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
