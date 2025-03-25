
import React from "react";
import { Link } from "react-router-dom";
import { Brain, Video, Users, BookOpen } from "lucide-react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />

      {/* Features section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-in">
              Why Learn AI with TeachifyAI?
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in" style={{animationDelay: "100ms"}}>
              Our platform is designed to make learning AI accessible,
              practical, and enjoyable for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Brain}
              title="Comprehensive Curriculum"
              description="From AI basics to advanced deep learning, our structured courses guide you through every step."
              delay={100}
            />
            <FeatureCard
              icon={Video}
              title="Interactive Lessons"
              description="Engaging video lessons combined with hands-on exercises reinforce your learning."
              delay={200}
            />
            <FeatureCard
              icon={Users}
              title="Expert Community"
              description="Connect with AI professionals and fellow learners to solve problems together."
              delay={300}
            />
            <FeatureCard
              icon={BookOpen}
              title="Real-world Projects"
              description="Apply your knowledge to practical projects that you can add to your portfolio."
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Course Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-fade-in">
                  Start Your AI Journey Today
                </h2>
                <div className="space-y-6 text-gray-600 animate-fade-in" style={{animationDelay: "100ms"}}>
                  <p className="text-lg">
                    Our introductory AI course is perfect for beginners who want to understand the fundamentals of artificial intelligence.
                  </p>
                  <ul className="space-y-2">
                    <ListItem>Introduction to AI concepts and terminology</ListItem>
                    <ListItem>Machine learning basics and algorithms</ListItem>
                    <ListItem>Neural networks and deep learning fundamentals</ListItem>
                    <ListItem>Practical AI applications in today's world</ListItem>
                  </ul>
                  <div className="pt-4">
                    <Link to="/lesson">
                      <Button className="font-medium">
                        Try a Free Lesson
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 animate-fade-in" style={{animationDelay: "200ms"}}>
                <div className="relative">
                  <div className="bg-gray-100 h-80 rounded-xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-xl" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg max-w-xs mx-auto">
                          <h3 className="font-display font-semibold text-xl mb-2">AI Fundamentals</h3>
                          <p className="text-gray-600 mb-4">Your first step into the world of artificial intelligence</p>
                          <Link to="/lesson">
                            <Button size="sm" variant="outline" className="w-full">
                              Preview Lesson
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-xl" />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-200 rounded-full opacity-50 blur-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-fade-in">
              Ready to Master AI?
            </h2>
            <p className="text-xl opacity-90 mb-10 animate-fade-in" style={{animationDelay: "100ms"}}>
              Join thousands of students who are already building the future with AI.
              Start your journey today and get access to our full course library.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: "200ms"}}>
              <Link to="/register">
                <Button className="w-full sm:w-auto text-base font-medium px-8 py-6 bg-white text-blue-700 hover:bg-white/90">
                  Create Free Account
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" className="w-full sm:w-auto text-base font-medium px-8 py-6 border-white text-white hover:bg-white/10">
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-display font-bold text-gradient">
                TeachifyAI
              </span>
              <p className="text-gray-500 mt-2">Learn AI. Build the future.</p>
            </div>
            <div className="flex gap-8">
              <Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
              <Link to="/lesson" className="text-gray-600 hover:text-primary transition-colors">Free Lesson</Link>
              <Link to="/login" className="text-gray-600 hover:text-primary transition-colors">Log In</Link>
              <Link to="/register" className="text-gray-600 hover:text-primary transition-colors">Sign Up</Link>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} TeachifyAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start">
    <span className="mr-2 mt-1 text-green-500">✓</span>
    <span>{children}</span>
  </li>
);

export default Index;
