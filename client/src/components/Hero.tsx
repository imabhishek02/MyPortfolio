import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Code } from "lucide-react";

export default function Hero() {
  const downloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/attached_assets/AbhishekRohit_Resume_1754247133711.pdf';
    link.download = 'Abhishek_Rohit_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
              <Code size={48} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Abhishek Rohit</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">
              Java Developer at Tata Consultancy Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
              Passionate Java backend developer with expertise in Spring Boot, microservices architecture, and enterprise solutions. 
              Building scalable backend systems and solving complex problems with robust Java technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button onClick={downloadResume} size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact" className="no-underline">
                Get In Touch
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/abhishekrohit/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/imabhishek02?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://leetcode.com/u/imabhishek02/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Code size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
