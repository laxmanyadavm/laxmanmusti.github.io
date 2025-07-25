import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, BarChart3, Cloud, Users, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import skillsImage from '@/assets/skills-coding.jpg';

const Skills: React.FC = () => {
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Python', level: 95, icon: '🐍' },
        { name: 'SQL', level: 92, icon: '🗃️' },
        { name: 'R', level: 85, icon: '📊' },
        { name: 'JavaScript', level: 78, icon: '🟨' },
        { name: 'SAS', level: 70, icon: '📈' }
      ]
    },
    {
      title: 'Data Analysis & BI Tools',
      icon: BarChart3,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Power BI', level: 90, icon: '📊' },
        { name: 'Tableau', level: 88, icon: '📈' },
        { name: 'Excel', level: 95, icon: '📋' },
        { name: 'Looker', level: 75, icon: '👁️' },
        { name: 'Qlik Sense', level: 70, icon: '🔍' }
      ]
    },
    {
      title: 'Databases & Big Data',
      icon: Database,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'PostgreSQL', level: 90, icon: '🐘' },
        { name: 'MySQL', level: 85, icon: '🗄️' },
        { name: 'MongoDB', level: 75, icon: '🍃' },
        { name: 'Snowflake', level: 80, icon: '❄️' },
        { name: 'Apache Spark', level: 70, icon: '⚡' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'AWS', level: 82, icon: '☁️' },
        { name: 'Azure', level: 78, icon: '🔷' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'Git', level: 88, icon: '🔧' },
        { name: 'Airflow', level: 70, icon: '🌊' }
      ]
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      color: 'from-red-500 to-red-600',
      skills: [
        { name: 'Scikit-learn', level: 85, icon: '🤖' },
        { name: 'TensorFlow', level: 75, icon: '🧠' },
        { name: 'Pandas', level: 95, icon: '🐼' },
        { name: 'NumPy', level: 90, icon: '🔢' },
        { name: 'Jupyter', level: 92, icon: '📓' }
      ]
    },
    {
      title: 'Collaboration & Soft Skills',
      icon: Users,
      color: 'from-teal-500 to-teal-600',
      skills: [
        { name: 'Stakeholder Management', level: 90, icon: '🤝' },
        { name: 'Data Storytelling', level: 95, icon: '📖' },
        { name: 'Project Management', level: 85, icon: '📋' },
        { name: 'Agile/Scrum', level: 80, icon: '🏃' },
        { name: 'Mentoring', level: 88, icon: '🎓' }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${skillsImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/95 dark:bg-background/90"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={ref}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit honed through years of hands-on experience 
              and continuous learning in the evolving data landscape
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index} 
                  className={`group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary delay-${index * 100}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="font-medium text-sm">{skill.name}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className={`skill-progress transition-all duration-1000 delay-${(index * 100) + (skillIndex * 100)}`}
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%' 
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;