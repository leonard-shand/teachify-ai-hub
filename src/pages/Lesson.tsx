
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  ChevronLeft, 
  PlayCircle, 
  CheckCircle, 
  BookOpen,
  MessageSquare,
  Award,
  Clock
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const LESSON_CONTENT = [
  {
    id: 1,
    title: "Introduction to AI",
    content: `
      <h2>What is Artificial Intelligence?</h2>
      <p>Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.</p>
      
      <h3>Key Concepts in AI</h3>
      <ul>
        <li><strong>Machine Learning:</strong> A subset of AI that enables computers to learn from data without being explicitly programmed.</li>
        <li><strong>Neural Networks:</strong> Computing systems inspired by the human brain's neural connections.</li>
        <li><strong>Deep Learning:</strong> Advanced machine learning using multi-layered neural networks.</li>
        <li><strong>Natural Language Processing:</strong> Enabling computers to understand and process human language.</li>
      </ul>

      <p>AI has evolved substantially over the decades, from simple rule-based systems to complex neural networks capable of learning and adapting to new information. Today, AI applications are everywhere in our daily lives, from voice assistants and recommendation systems to autonomous vehicles and medical diagnostic tools.</p>
    `,
  },
  {
    id: 2,
    title: "The History of AI",
    content: `
      <h2>The Evolution of Artificial Intelligence</h2>
      <p>The history of AI dates back to ancient times when myths, stories, and rumors of artificial beings endowed with intelligence were first conceived. However, the field of AI research was formally founded in 1956 at a workshop held at Dartmouth College.</p>
      
      <h3>Key Milestones</h3>
      <ul>
        <li><strong>1950s:</strong> Alan Turing proposes the Turing Test as a measure of machine intelligence.</li>
        <li><strong>1956:</strong> The Dartmouth Conference marks the birth of AI as a field.</li>
        <li><strong>1960s-70s:</strong> Early enthusiasm and significant funding leads to early AI systems.</li>
        <li><strong>1980s-90s:</strong> The AI Winter period with reduced funding and interest.</li>
        <li><strong>2000s:</strong> Resurgence with practical applications and advances in machine learning.</li>
        <li><strong>2010s-Present:</strong> Deep learning revolution, widespread adoption of AI in various industries.</li>
      </ul>

      <p>Understanding AI's historical context helps us appreciate the challenges that researchers have overcome and provides context for the current state of the technology.</p>
    `,
  },
  {
    id: 3,
    title: "Machine Learning Basics",
    content: `
      <h2>Understanding Machine Learning</h2>
      <p>Machine Learning (ML) is a subset of AI that focuses on developing systems that can learn from and make decisions based on data. Instead of explicitly programming rules, ML algorithms build models based on sample data, known as training data, to make predictions or decisions.</p>
      
      <h3>Types of Machine Learning</h3>
      <ul>
        <li><strong>Supervised Learning:</strong> Training with labeled data (input-output pairs).</li>
        <li><strong>Unsupervised Learning:</strong> Finding patterns in unlabeled data.</li>
        <li><strong>Reinforcement Learning:</strong> Learning through trial and error with rewards and penalties.</li>
      </ul>

      <h3>Common Machine Learning Algorithms</h3>
      <ul>
        <li>Linear Regression</li>
        <li>Logistic Regression</li>
        <li>Decision Trees</li>
        <li>Random Forests</li>
        <li>Support Vector Machines</li>
        <li>K-Nearest Neighbors</li>
        <li>Neural Networks</li>
      </ul>

      <p>Machine learning powers many of the AI applications we use daily, from email spam filters to recommendation systems on streaming platforms.</p>
    `,
  }
];

const Lesson: React.FC = () => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const currentLesson = LESSON_CONTENT[currentLessonIndex];
  const progress = ((currentLessonIndex + 1) / LESSON_CONTENT.length) * 100;
  
  const goToNextLesson = () => {
    if (currentLessonIndex < LESSON_CONTENT.length - 1) {
      setCurrentLessonIndex(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      setIsCompleted(true);
    }
  };
  
  const goToPrevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {isCompleted ? (
              <div className="glass-card rounded-2xl p-8 text-center animate-fade-in">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Award className="h-10 w-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-display font-bold mb-4">Congratulations!</h1>
                <p className="text-xl text-gray-600 mb-8">
                  You've completed the free AI Introduction lesson. Ready to continue your learning journey?
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                  <Link to="/register">
                    <Button className="w-full sm:w-auto font-medium">
                      Sign Up for Full Access
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto font-medium"
                    onClick={() => {
                      setIsCompleted(false);
                      setCurrentLessonIndex(0);
                    }}
                  >
                    Restart Lesson
                  </Button>
                </div>
                <div className="p-6 bg-blue-50 rounded-xl max-w-md mx-auto">
                  <h3 className="font-display font-semibold mb-2">What you'll get with a full account:</h3>
                  <ul className="text-left space-y-2 mb-0">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Access to our complete AI curriculum</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Hands-on projects and coding exercises</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Community access and expert guidance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Course completion certificates</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-display font-bold animate-fade-in">
                      AI Fundamentals: Free Lesson
                    </h1>
                    <div className="flex items-center mt-2 text-sm text-gray-600 animate-fade-in">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>15 minutes</span>
                      <span className="mx-2">•</span>
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>Beginner</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-3 text-gray-700">
                      {currentLessonIndex + 1}/{LESSON_CONTENT.length}
                    </span>
                    <Progress value={progress} className="w-32" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Lesson sidebar */}
                  <div className="md:col-span-1 order-2 md:order-1">
                    <div className="glass-card rounded-xl p-5 sticky top-24 animate-fade-in">
                      <h3 className="font-display font-semibold mb-4">Lesson Contents</h3>
                      <ul className="space-y-2">
                        {LESSON_CONTENT.map((lesson, index) => (
                          <li key={lesson.id}>
                            <button
                              onClick={() => setCurrentLessonIndex(index)}
                              className={`w-full text-left px-3 py-2 rounded-lg flex items-center text-sm ${
                                currentLessonIndex === index
                                  ? "bg-blue-100 text-blue-700 font-medium"
                                  : "hover:bg-gray-100 text-gray-700"
                              }`}
                            >
                              <span 
                                className={`w-5 h-5 rounded-full mr-2 flex items-center justify-center text-xs ${
                                  currentLessonIndex > index
                                    ? "bg-green-500 text-white"
                                    : currentLessonIndex === index
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                                }`}
                              >
                                {currentLessonIndex > index ? (
                                  <CheckCircle className="h-3 w-3" />
                                ) : (
                                  index + 1
                                )}
                              </span>
                              {lesson.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <Link to="/register">
                          <Button variant="outline" className="w-full justify-start">
                            <PlayCircle className="mr-2 h-4 w-4" />
                            Unlock Full Course
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Lesson content */}
                  <div className="md:col-span-3 order-1 md:order-2">
                    <div className="glass-card rounded-xl p-6 md:p-8 animate-fade-in">
                      <h2 className="text-2xl font-display font-semibold mb-6">
                        {currentLesson.title}
                      </h2>
                      
                      <div 
                        className="prose prose-blue max-w-none"
                        dangerouslySetInnerHTML={{ __html: currentLesson.content }}
                      />
                      
                      <div className="mt-10 pt-6 border-t border-gray-200 flex justify-between">
                        <Button
                          variant="outline"
                          onClick={goToPrevLesson}
                          disabled={currentLessonIndex === 0}
                          className={currentLessonIndex === 0 ? "invisible" : ""}
                        >
                          <ChevronLeft className="mr-2 h-4 w-4" />
                          Previous
                        </Button>
                        
                        <Button onClick={goToNextLesson}>
                          {currentLessonIndex === LESSON_CONTENT.length - 1 ? (
                            <>Complete Lesson</>
                          ) : (
                            <>
                              Next
                              <ChevronRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                    
                    {/* Discussion section */}
                    <div className="mt-8 glass-card rounded-xl p-6 md:p-8 animate-fade-in-delay">
                      <div className="flex items-center mb-6">
                        <MessageSquare className="h-5 w-5 text-blue-600 mr-2" />
                        <h3 className="font-display font-semibold">Discussion</h3>
                      </div>
                      
                      <div className="p-8 text-center">
                        <p className="text-gray-600 mb-4">
                          Join the discussion about this lesson
                        </p>
                        <Link to="/register">
                          <Button variant="outline">
                            Sign Up to Comment
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
