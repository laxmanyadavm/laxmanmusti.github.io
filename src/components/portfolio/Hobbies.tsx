import React, { useEffect, useRef, useState } from 'react';
import { Book, Dumbbell, Camera, Gamepad2, Plane, Music, Coffee, Mountain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import hobbiesImage from '@/assets/hobbies-lifestyle.jpg';
import readingImage from '@/assets/reading.JPEG';
import fitnessImage from '@/assets/fitness.jpg';
import photo1 from '@/assets/photo1.jpg';
import photo2 from '@/assets/photo2.jpg';
import photo3 from '@/assets/photo3.jpg';
import travel1 from '@/assets/travel1.JPEG';
import travel2 from '@/assets/travel2.JPEG';
import musicImage from '@/assets/music1.jpg';
import hikingImage from '@/assets/hiking.JPEG';

const Hobbies: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flashingImages, setFlashingImages] = useState<{[key: number]: number}>({});
  const ref = useRef<HTMLDivElement>(null);
  const flashIntervals = useRef<{[key: number]: NodeJS.Timeout}>({});

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

    return () => {
      observer.disconnect();
      // Clean up intervals
      Object.values(flashIntervals.current).forEach(interval => clearInterval(interval));
    };
  }, []);

  const startFlashing = (index: number, images: string[]) => {
    if (flashIntervals.current[index]) return;
    
    setFlashingImages(prev => ({ ...prev, [index]: 0 }));
    flashIntervals.current[index] = setInterval(() => {
      setFlashingImages(prev => ({
        ...prev,
        [index]: (prev[index] + 1) % images.length
      }));
    }, 1000);
  };

  const stopFlashing = (index: number) => {
    if (flashIntervals.current[index]) {
      clearInterval(flashIntervals.current[index]);
      delete flashIntervals.current[index];
    }
    setFlashingImages(prev => {
      const newState = { ...prev };
      delete newState[index];
      return newState;
    });
  };

  const hobbies = [
    {
      title: 'Reading',
      description: 'Fuel for creativity',
      detail: 'Love diving into books on psychology, business strategy, and sci-fi novels. Currently reading "Thinking Fast and Slow"',
      icon: Book,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      image: readingImage
    },
    {
      title: 'Fitness',
      description: 'Balance matters',
      detail: 'Regular gym sessions and running keep me energized. Recently completed my first half-marathon!',
      icon: Dumbbell,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
      image: fitnessImage
    },
    {
      title: 'Photography',
      description: 'Capturing moments',
      detail: 'Street photography and landscapes are my favorites. Always looking for interesting patterns and compositions',
      icon: Camera,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      images: [photo1, photo2, photo3]
    },
    {
      title: 'Travel',
      description: 'Exploring perspectives',
      detail: 'Visited 15 countries so far. Love experiencing different cultures and gaining new perspectives on life',
      icon: Plane,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      images: [travel1, travel2]
    },
    {
      title: 'Music',
      description: 'Creative inspiration',
      detail: 'Jazz and electronic music while coding. Also learning piano in my spare time',
      icon: Music,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50 dark:bg-pink-950/20',
      image: musicImage
    },
    {
      title: 'Hiking',
      description: 'Nature connection',
      detail: 'Weekend hikes in nearby mountains. Best ideas often come during long walks in nature',
      icon: Mountain,
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50 dark:bg-teal-950/20',
      image: hikingImage
    }
  ];

  return (
    <section 
      id="hobbies" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${hobbiesImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90 dark:bg-background/95"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={ref}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient">Beyond the Data</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Life is about balance. Here's what keeps me inspired, creative, and energized 
              outside of the world of data and analytics
            </p>
          </div>

          {/* Hobbies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              const hasMultipleImages = hobby.images && hobby.images.length > 1;
              const currentImage = hasMultipleImages 
                ? hobby.images[flashingImages[index] || 0]
                : hobby.image;
              
              return (
                <Card 
                  key={index} 
                  className={`group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 cursor-pointer ${hobby.bgColor} border-none relative overflow-hidden`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => {
                    if (hasMultipleImages) {
                      startFlashing(index, hobby.images);
                    }
                  }}
                  onMouseLeave={() => {
                    if (hasMultipleImages) {
                      stopFlashing(index);
                    }
                  }}
                >
                  {/* Background Image with 70% opacity on hover */}
                  {currentImage && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-500">
                      <img 
                        src={currentImage} 
                        alt={hobby.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <CardContent className="p-6 text-center space-y-4 relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${hobby.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="font-bold text-lg text-foreground group-hover:text-white transition-colors duration-300">
                        {hobby.title}
                      </h3>
                      <p className="text-sm text-muted-foreground group-hover:text-white/90 font-medium mb-2 transition-colors duration-300">
                        {hobby.description}
                      </p>
                    </div>

                    {/* Detail */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs text-muted-foreground group-hover:text-white/80 leading-relaxed transition-colors duration-300">
                        {hobby.detail}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Personal Philosophy */}
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gradient">My Philosophy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "The best insights come from a well-rounded perspective. Each hobby teaches me something 
                  new about problem-solving, creativity, and perseverance that I bring back to my work. 
                  Whether it's the patience learned from photography or the discipline from fitness - it all contributes to being a better analyst."
                </p>
                <div className="mt-6 text-right">
                  <span className="text-primary font-semibold">— Laxman Musti</span>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hobbies;