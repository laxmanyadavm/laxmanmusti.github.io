import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { RecruiterModeProvider } from '@/contexts/RecruiterModeContext';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Work from '@/components/portfolio/Work';
import Skills from '@/components/portfolio/Skills';
import Education from '@/components/portfolio/Education';
import Hobbies from '@/components/portfolio/Hobbies';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <RecruiterModeProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Hero />
            <About />
            <Work />
            <Skills />
            <Education />
            <Hobbies />
            <Contact />
          </main>
          <Footer />
        </div>
      </RecruiterModeProvider>
    </ThemeProvider>
  );
};

export default Index;
