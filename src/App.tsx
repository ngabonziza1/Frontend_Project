import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { BookOpen, GraduationCap, Wrench, Users, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { LoginDialog } from "./components/LoginDialog";
import { RegisterDialog } from "./components/RegisterDialog";
// import './styles/globals.css'
export default function App() {
  const backgroundImages = [
    "https://images.unsplash.com/photo-1654366698665-e6d611a9aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2MzA2NDg3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1566314748815-2ff5db8edf2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpYnJhcnklMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzMDg0ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MzEwMzcwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRvb2xzJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYzMTM2NTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1759756480941-7230dedf5fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2NhdGlvbmFsJTIwdHJhaW5pbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjMwNTAzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <span className="text-xl">EduTVET</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#education" className="text-gray-700 hover:text-blue-600 transition-colors">
                Education
              </a>
              <a href="#tvet" className="text-gray-700 hover:text-blue-600 transition-colors">
                TVET Programs
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
              <LoginDialog />
              <RegisterDialog />
            </div>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl mb-6">
                Empowering Through Education & Vocational Training
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover world-class education and technical vocational training programs designed to equip you with the skills needed for tomorrow's opportunities.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gap-2">
                  Explore Programs <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={backgroundImages[currentImageIndex]}
                alt="Students learning in classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Education Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access comprehensive educational resources and programs that foster critical thinking, creativity, and academic excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1566314748815-2ff5db8edf2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpYnJhcnklMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzMDg0ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Library with books"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl">Rich Library Resources</h3>
              </div>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760840414854-36cd365d14f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9va3MlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjMxMzY1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Open books for studying"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl">Comprehensive Curriculum</h3>
              </div>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MzEwMzcwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Science laboratory"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl">Modern Science Labs</h3>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzA3MjgwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Education technology"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Academic Excellence</h3>
                      <p className="text-gray-600">
                        Comprehensive curriculum designed to build strong foundational knowledge and critical thinking skills.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Collaborative Learning</h3>
                      <p className="text-gray-600">
                        Engage with peers and educators in an interactive environment that promotes teamwork and communication.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Career Preparation</h3>
                      <p className="text-gray-600">
                        Build the academic foundation needed for higher education and professional career paths.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* TVET Section */}
      <section id="tvet" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Technical & Vocational Training</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gain practical, hands-on skills in technical and vocational fields that lead to immediate career opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6 order-2 md:order-1">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Wrench className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Hands-On Training</h3>
                      <p className="text-gray-600">
                        Learn practical skills through real-world projects and industry-standard equipment and tools.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-100 rounded-lg">
                      <Users className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Industry Partnerships</h3>
                      <p className="text-gray-600">
                        Benefit from partnerships with leading companies and access to internship and job placement opportunities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-100 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Certified Programs</h3>
                      <p className="text-gray-600">
                        Earn recognized certifications that validate your skills and enhance your employability in the job market.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
              <div className="relative h-[280px] rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759756480941-7230dedf5fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2NhdGlvbmFsJTIwdHJhaW5pbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjMwNTAzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Vocational training workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-[280px] rounded-xl overflow-hidden shadow-lg mt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1631836936114-a88703ffbff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjB0cmFpbmluZyUyMGhhbmRzfGVufDF8fHx8MTc2MzEzNTgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Technical hands-on training"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Workshop & Lab Images Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRvb2xzJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYzMTM2NTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workshop with tools and training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl mb-2">Professional Workshops</h3>
                <p className="text-white/90">Fully equipped workshops with industry-grade tools and equipment for comprehensive hands-on learning.</p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MzEwMzcwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Technical laboratory"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl mb-2">State-of-the-Art Labs</h3>
                <p className="text-white/90">Access cutting-edge laboratory facilities for technical training, research, and skill development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have transformed their lives through our education and vocational training programs.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                <span className="text-white">EduTVET</span>
              </div>
              <p className="text-sm">
                Empowering individuals through quality education and vocational training.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-white">Programs</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Academic Courses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TVET Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Certifications</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-white">About</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Faculty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partnerships</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-white">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>Email: info@edutvet.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Education St.</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; 2025 EduTVET. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}