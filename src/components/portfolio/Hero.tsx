import React, { useEffect, useState } from 'react';
import { ArrowDown, Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRecruiterMode } from '@/contexts/RecruiterModeContext';
const heroImage = 'src/assets/hero.jpg';

const Hero: React.FC = () => {
  const { isRecruiterMode } = useRecruiterMode();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = 'Laxman_Yadav_Musti.pdf';
    link.download = 'Laxman_Yadav_Musti.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-secondary/20 rounded-full blur-lg float"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {isRecruiterMode ? (
            // Recruiter Mode View
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Available for New Opportunities</span>
              </div>
              
              <h1 className="text-hero text-white mb-6">
                Data Analyst
                <span className="block text-2xl md:text-3xl font-normal mt-2 text-white/90">
                  Turning Data into Business Impact
                </span>
              </h1>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                <div className="glass p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-secondary-light">3+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
                <div className="glass p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-secondary-light">$2M+</div>
                  <div className="text-sm text-white/80">Cost Savings Driven</div>
                </div>
                <div className="glass p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-secondary-light">7+</div>
                  <div className="text-sm text-white/80">Projects Delivered</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button onClick={downloadResume} className="btn-hero">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <a href="mailto:laxman.musti@email.com" className="btn-ghost-hero">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </a>
              </div>
            </div>
          ) : (
            // Regular Mode View
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-white/90 font-medium">
                  Hi there!, I'm
                </p>
                <h1 className="text-hero text-white">
                  Laxman Musti
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold text-secondary-light mb-6">
                  Data Analyst & Business Intelligence Expert
                </h2>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  I transform complex data into actionable insights that drive business growth. 
                  With expertise in Python, SQL, and modern BI tools, I help organizations 
                  make data-driven decisions that create real impact.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button onClick={scrollToAbout} className="btn-hero">
                  Explore My Work
                  <ArrowDown className="w-5 h-5 ml-2" />
                </Button>
                <Button onClick={downloadResume} className="btn-ghost-hero">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center space-x-6 pt-8">
                <a 
                  href="https://github.com/laxmanyadavm" 
                  className="text-white/70 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/laxman-musti/" 
                  className="text-white/70 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:laxmanyadavmusti@gmail.com" 
                  className="text-white/70 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
