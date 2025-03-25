
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:py-36 lg:py-44 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-24 left-1/3 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob -z-10" />
      <div className="absolute top-36 right-1/3 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 mb-6 rounded-full bg-blue-100 text-blue-700 text-sm font-medium animate-fade-in">
            The Future of Learning is Here
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
            Master Artificial Intelligence 
            <span className="text-gradient"> Together</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
            From beginners to advanced practitioners, our platform provides interactive lessons,
            hands-on projects, and a community of experts to guide your AI journey.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <Link to="/register">
              <Button className="w-full sm:w-auto text-base font-medium px-8 py-6 bg-primary hover:bg-primary/90">
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/lesson">
              <Button variant="outline" className="w-full sm:w-auto text-base font-medium px-8 py-6">
                Try a Free Lesson
              </Button>
            </Link>
          </div>
          
          <div className="mt-20 animate-fade-in-delay">
            <p className="text-sm text-gray-500 mb-4">Trusted by learners from</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="h-6 text-gray-400 font-display font-semibold">GOOGLE</div>
              <div className="h-6 text-gray-400 font-display font-semibold">MICROSOFT</div>
              <div className="h-6 text-gray-400 font-display font-semibold">AMAZON</div>
              <div className="h-6 text-gray-400 font-display font-semibold">META</div>
              <div className="h-6 text-gray-400 font-display font-semibold">OPENAI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
