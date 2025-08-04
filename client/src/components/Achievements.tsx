import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Code, Target, Award } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: <Code className="text-blue-600" size={32} />,
      title: "500+ Problems Solved",
      subtitle: "LeetCode & GeeksforGeeks",
      description: "Demonstrated strong problem-solving skills across multiple coding platforms",
      highlight: "500+",
      category: "Competitive Programming"
    },
    {
      icon: <Trophy className="text-yellow-600" size={32} />,
      title: "World Rank 2251",
      subtitle: "LeetCode Weekly Contest 443",
      description: "Secured top 8.5% ranking among 26K+ participants globally",
      highlight: "Top 8.5%",
      category: "Contest Performance"
    },
    {
      icon: <Target className="text-green-600" size={32} />,
      title: "Google Code Jam 2022",
      subtitle: "Qualified Participant",
      description: "Successfully qualified for Google's prestigious competitive programming contest",
      highlight: "Qualified",
      category: "Google Contest"
    },
    {
      icon: <Award className="text-purple-600" size={32} />,
      title: "Wings Java Assessment",
      subtitle: "TCS Recognition",
      description: "Cleared organization's Java Tech Track assessment with recognition, outperforming peers",
      highlight: "Recognized",
      category: "Professional"
    }
  ];

  const stats = [
    { number: "500+", label: "Problems Solved", color: "text-blue-600" },
    { number: "2251", label: "LeetCode World Rank", color: "text-yellow-600" },
    { number: "8.5%", label: "Top Percentile", color: "text-green-600" },
    { number: "1+", label: "Years at TCS", color: "text-purple-600" }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Milestones that showcase my dedication to excellence and continuous learning
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    {achievement.icon}
                    <div>
                      <CardTitle className="text-lg text-slate-800 dark:text-white">
                        {achievement.title}
                      </CardTitle>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                        {achievement.subtitle}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {achievement.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {achievement.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {achievement.highlight}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                These achievements reflect my commitment to continuous learning and excellence in software development. 
                I'm always eager to take on new challenges and contribute to innovative projects.
              </p>
              <Badge variant="outline" className="text-blue-600 border-blue-600">
                Always Learning • Always Growing
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
