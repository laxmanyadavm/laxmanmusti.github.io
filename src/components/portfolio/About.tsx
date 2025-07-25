import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import aboutImage from '@/assets/hero.jpg';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const timeline = [
    {
      year: '2024',
      title: 'Data Analyst',
      company: 'Datics INC',
      description: 'Built automated pipelines and data dashboards for $2M+ decisions',
      icon: TrendingUp
    },
    {
      year: '2022',
      title: 'MS in Data Science',
      company: 'Pace University, NY',
      description: 'Specialized in data analysis, machine learning, and BI tools',
      icon: Award
    },
    {
      year: '2020',
      title: 'Systems Engineer - Analytics',
      company: 'Tata Consultancy Services Ltd.',
      description: 'Automated reporting workflows and built operational dashboards',
      icon: Calendar
    },
    {
      year: '2020',
      title: 'BTech in Civil Engineering',
      company: 'JNTUH Sultanpur',
      description: 'Developed problem-solving foundations and analytical thinking',
      icon: MapPin
    }
  ];

  const beliefs = [
    "Make sense of messy datasets (I see beauty in SQL joins)",
    "Build automated reports that actually save time",
    "Discover patterns that drive real-world business outcomes",
    "Translate “what’s happening?” into “what should we do next?”"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              part data whisperer, part problem solver, and full-time fan of turning chaos into clarity
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Column - Bio & Photo */}
            <div className="space-y-8">
              <div className="relative">
                <div className="aspect-square w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-elegant">
                  <img 
                    src={aboutImage} 
                    alt="Laxman Musti" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary rounded-2xl blur-3xl opacity-30"></div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">The Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  My journey started not in a data lab, but on construction sites with a degree in Civil Engineering. 
                  That’s where I learned to build from the ground up - literally. 
                  But soon, I realized the foundations I really loved were data pipelines, not concrete ones. 
                  So I pivoted. Swapped hard hats for dashboards. And I haven’t looked back.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  That pivot wasn’t easy, but it felt right. I immersed myself in data - studying it, shaping it, and learning how to make it speak. 
                  Over time, I found joy not just in solving problems, but in asking better questions. 
                  I learned that good analytics doesn’t start with numbers - it starts with curiosity.
                </p>
              </div>

              {/* What I Believe In */}
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4">Today, I help companies:</h4>
                  <ul className="space-y-3">
                    {beliefs.map((belief, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{belief}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Timeline */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Career Timeline</h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
                
                {/* Timeline Items */}
                <div className="space-y-8">
                  {timeline.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="relative flex items-start space-x-6">
                        {/* Timeline Dot */}
                        <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full shadow-lg">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        
                        {/* Content */}
                        <Card className="flex-1 border-none shadow-soft hover:shadow-elegant transition-shadow duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                                {item.year}
                              </span>
                            </div>
                            <h4 className="font-semibold text-lg text-foreground mb-1">
                              {item.title}
                            </h4>
                            <p className="text-primary font-medium mb-2">
                              {item.company}
                            </p>
                            <p className="text-muted-foreground">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '3+', label: 'Years Experience', color: 'text-primary' },
              { number: '7+', label: 'Projects Completed', color: 'text-secondary' },
              { number: '$2M+', label: 'Cost Savings Generated', color: 'text-primary' }
            ].map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;