import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Code, MapPin, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={20} />,
      label: "Email",
      value: "ar.rohit030@gmail.com",
      href: "mailto:ar.rohit030@gmail.com"
    },
    {
      icon: <Phone className="text-green-600" size={20} />,
      label: "Phone",
      value: "+91-7903611950",
      href: "tel:+917903611950"
    },
    {
      icon: <MapPin className="text-red-600" size={20} />,
      label: "Location",
      value: "Mumbai, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abhishekrohit/",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      href: "https://github.com/imabhishek02?tab=repositories",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      icon: <Code size={24} />,
      label: "LeetCode",
      href: "https://leetcode.com/u/imabhishek02/",
      color: "hover:text-orange-600"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborating on interesting projects, 
            or simply having a conversation about technology and software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-white">
                  <Send className="text-blue-600" size={24} />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      {info.icon}
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-slate-800 dark:text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-4">
                    Follow Me Online
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-slate-600 dark:text-slate-300 ${link.color} transition-colors duration-200`}
                        title={link.label}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-slate-800 dark:text-white">
                  Ready to Collaborate?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3">
                      What I'm Looking For
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-slate-600 dark:text-slate-300">
                          Java backend development opportunities
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-slate-600 dark:text-slate-300">
                          Software Developer/SDE roles
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-slate-600 dark:text-slate-300">
                          Microservices architecture roles
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-slate-600 dark:text-slate-300">
                          Collaborative team environments
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      I typically respond to emails within 24 hours. Feel free to reach out for:
                    </p>
                    <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-1">
                      <li>• Job opportunities and career discussions</li>
                      <li>• Technical consultations and code reviews</li>
                      <li>• Open source project collaborations</li>
                      <li>• Speaking engagements and tech talks</li>
                    </ul>
                  </div>

                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <a href="mailto:ar.rohit030@gmail.com">
                      <Mail className="mr-2" size={16} />
                      Send Me an Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-slate-600 dark:text-slate-300">
            © 2025 Abhishek Rohit. Built with passion for great software.
          </p>
        </div>
      </div>
    </section>
  );
}
