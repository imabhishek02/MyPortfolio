import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Academic foundation that shaped my technical expertise and analytical thinking
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-slate-800 dark:text-white">
                    Techno Main Saltlake
                  </CardTitle>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                    Bachelor of Technology - Electrical Engineering
                  </p>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    <Award className="mr-1" size={14} />
                    CGPA: 8.95
                  </Badge>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-600 dark:text-slate-300">
                <div className="flex items-center">
                  <Calendar className="mr-2" size={16} />
                  <span>June 2019 – July 2023</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2" size={16} />
                  <span>Kolkata, India</span>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
                    Academic Excellence
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-700 rounded-lg">
                      <span className="text-slate-700 dark:text-slate-300">Overall CGPA</span>
                      <span className="font-bold text-green-600 dark:text-green-400">8.95/10</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-700 rounded-lg">
                      <span className="text-slate-700 dark:text-slate-300">Duration</span>
                      <span className="font-semibold text-slate-800 dark:text-white">4 Years</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-700 rounded-lg">
                      <span className="text-slate-700 dark:text-slate-300">Specialization</span>
                      <span className="font-semibold text-slate-800 dark:text-white">Electrical Engineering</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
                    Key Learning Areas
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-slate-600 dark:text-slate-300">
                        Mathematical Analysis & Problem Solving
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-slate-600 dark:text-slate-300">
                        Data Structures & Algorithms
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-slate-600 dark:text-slate-300">
                        Programming & Software Development
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-slate-600 dark:text-slate-300">
                        Systems Analysis & Design
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-slate-600 dark:text-slate-300">
                        Project Management & Team Collaboration
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                  Academic Impact on Career
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  My engineering background provided a strong foundation in analytical thinking, 
                  problem-solving methodologies, and systematic approaches to complex challenges. 
                  The rigorous curriculum developed my ability to understand intricate systems and 
                  optimize performance—skills that directly translate to my success in software development.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
