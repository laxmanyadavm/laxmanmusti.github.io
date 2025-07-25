import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, TrendingUp, DollarSign, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Work: React.FC = () => {
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

  const projects = [
    {
      title: 'A/B Testing Analysis: Bank Marketing Campaign',
      company: 'Datics Inc.',
      duration: '1 month',
      impact: 'Improved campaign conversion by 20%',
      team: '1 member',
      description: 'Performed statistical A/B testing on a Portuguese bank’s marketing campaign to determine optimal targeting strategies and improve response rates.',
      technologies: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'SciPy', 'Tableau'],
      achievements: [
        'Conducted hypothesis testing on 11K+ records',
        'Drove 20% lift in subscription rate for best-performing strategy',
        'Presented actionable insights with data visualizations'
      ],
      type: 'Analytics / Experimentation',
      color: 'from-green-500 to-green-600',
      featured: true,
      link: 'https://github.com/laxmanyadavm/bank-marketing-abtest'
    },
    {
      title: 'Ecommerce Retention Analysis',
      company: 'Independent',
      duration: '2 weeks',
      impact: 'Identified churn drivers and optimized LTV segments',
      team: '1 member',
      description: 'Analyzed user behavior for an ecommerce platform to uncover retention patterns and improve long-term user engagement and lifetime value.',
      technologies: ['Python', 'SQL','Cohort Analysis', 'Pandas', 'Matplotlib'],
      achievements: [
      'Performed cohort-based retention analysis on customer data',
      'Segmented users into behavioral groups to improve targeting',
      'Suggested strategy to increase LTV by 10%'
      ],
      type: 'Customer Analytics',
      color: 'from-green-500 to-green-600',
      featured: true,
      link: 'https://github.com/laxmanyadavm/ecommerce-retention-analysis'
    },
    {
      title: 'Urban Scene Semantic Segmentation',
      company: 'Pace University',
      duration: '3 months',
      impact: '',
      team: '3 members',
      description: 'Developed a deep learning model based on the SegNet architecture to accurately segment urban scene images into different object classes.',
      technologies: ['Python', 'Scikit-learn', 'PyTorch', 'Machine Learning'],
      achievements: [
        'Trained the SegNet model over multiple epochs, optimizing for both Intersection over Union (IOU) and loss metrics.',
        'Achieved mIoU of 79.2% on Cityscapes dataset',
        'Completed with a 0.7 cross entropy loss'
      ],
      type: 'Machine Learning',
      color: 'from-blue-500 to-blue-600',
      featured: true,
      link:'https://github.com/laxmanyadavm/segnet'
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="work" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient">Featured Work</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Showcasing impactful data science projects that drove real business results 
              and transformed decision-making processes
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-12 mb-16">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 border-l-4 border-l-primary"
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Project Info */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <Badge 
                            className={`bg-gradient-to-r ${project.color} text-white border-none`}
                          >
                            {project.type}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{project.company}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div>
                        <h4 className="font-semibold mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-4 pt-4">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </Button>
                      </div>
                    </div>

                    {/* Project Metrics */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                        <div className="bg-muted/50 p-4 rounded-lg text-center">
                          <Clock className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                          <div className="font-bold text-lg">{project.duration}</div>
                          <div className="text-sm text-muted-foreground">Timeline</div>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg text-center">
                          <Users className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                          <div className="font-bold text-lg">{project.team}</div>
                          <div className="text-sm text-muted-foreground">Team Size</div>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg text-center">
                          <TrendingUp className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                          <div className="font-bold text-lg">Success</div>
                          <div className="text-sm text-muted-foreground">Project Status</div>
                        </div>
                      </div>
                    </div>
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

export default Work;
