import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DAIcon from '@/assets/DA.png';
import DSIcon from '@/assets/DS.png';
import EDAIcon from '@/assets/EDA.png';
import RIcon from '@/assets/r.png';

const Education: React.FC = () => {
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

  const education = [
    {
      degree: 'Master of Science in Data Science',
      institution: 'Pace University, NY',
      location: 'New York, NY',
      period: '2022 - 2024',
      gpa: '3.88/4.0',
      description: 'Specialized in statistical modeling, machine learning, and business intelligence. Completed thesis on semantic segmentation for urban scenes.',
      courses: [
        'Advanced Statistics & Probability',
        'Machine Learning Algorithms',
        'Data Mining & Warehousing',
        'Business Intelligence Systems',
        'Big Data Technologies',
        'Statistical Programming (R/Python)'
      ],
      achievements: [
        'Magna Cum Laude graduate',
        'Dean\'s List for 4 semesters',
        'Outstanding Thesis Award',
        'Data Science Club President'
      ],
      type: 'Graduate',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const certifications = [
    {
      name: 'Google Data Analytics Professional Certified',
      issuer: 'Google',
      date: '2025',
      icon: DAIcon,
      color: 'bg-orange-500',
      url: 'https://coursera.org/share/0ea0af820956315ad2f16014461dc074'
    },
    {
      name: 'IBM Applied Data Science',
      issuer: 'IBM',
      date: '2022',
      icon: DSIcon,
      color: 'bg-blue-500',
      url: 'https://www.credly.com/badges/4decc9f6-a113-4ff0-89f3-e2a2c4b1d1a5'
    },
    {
      name: 'Data Analysis with R',
      issuer: 'Google',
      date: '2025',
      icon: RIcon,
      color: 'bg-blue-600',
      url: 'https://coursera.org/share/c3eb02d72bc489409c314295e6238ebd'
    },
    {
      name: 'EDA with Python',
      issuer: 'Google',
      date: '2025',
      icon: EDAIcon,
      color: 'bg-green-500',
      url: 'https://coursera.org/share/9e0ec289449eeb8c23db6c4d2813a604'
    }
  ];

  const achievements = [
    {
      title: 'Outstanding Graduate Student Award',
      year: '2019',
      description: 'Recognized for exceptional academic performance and research contributions',
      icon: Trophy
    },
    {
      title: 'Best Data Science Project',
      year: '2019',
      description: 'University-wide competition for innovative data science applications',
      icon: Award
    },
    {
      title: 'Research Publication',
      year: '2018',
      description: 'Co-authored paper on "Predictive Analytics in Customer Retention"',
      icon: BookOpen
    },
    {
      title: 'Academic Excellence Scholarship',
      year: '2017-2019',
      description: 'Merit-based scholarship covering 75% of tuition fees',
      icon: GraduationCap
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient">Education & Credentials</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A solid academic foundation combined with continuous professional development 
              to stay at the forefront of data science and analytics
            </p>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12">Academic Journey</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-elegant transition-all duration-500 border-l-4 border-l-primary"
                >
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Main Info */}
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <div className="flex items-center space-x-4 mb-4">
                            <Badge className={`bg-gradient-to-r ${edu.color} text-white border-none`}>
                              {edu.type}
                            </Badge>
                            <div className="flex items-center text-muted-foreground text-sm">
                              <Calendar className="w-4 h-4 mr-1" />
                              {edu.period}
                            </div>
                            <div className="flex items-center text-muted-foreground text-sm">
                              <MapPin className="w-4 h-4 mr-1" />
                              {edu.location}
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-primary font-semibold mb-3">
                            {edu.institution}
                          </p>
                          <p className="text-muted-foreground leading-relaxed">
                            {edu.description}
                          </p>
                        </div>

                        {/* Courses */}
                        <div>
                          <h4 className="font-semibold mb-3">Key Coursework</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {edu.courses.map((course, courseIndex) => (
                              <div key={courseIndex} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span className="text-sm text-muted-foreground">{course}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>

                      {/* GPA & Stats */}
                      <div className="space-y-6">
                        <div className="text-center bg-muted/50 p-6 rounded-xl">
                          <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                          <div className="text-3xl font-bold text-primary mb-2">{edu.gpa}</div>
                          <div className="text-sm text-muted-foreground">GPA</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-soft transition-all duration-300 cursor-pointer hover:-translate-y-1 group"
                  onClick={() => window.open(cert.url, '_blank')}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 bg-white shadow-md">
                      <img src={cert.icon} alt={cert.name} className="w-12 h-12 object-contain" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">{cert.name}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                    <Badge variant="secondary">{cert.date}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;