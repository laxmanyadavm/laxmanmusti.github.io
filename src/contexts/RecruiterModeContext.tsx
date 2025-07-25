import React, { createContext, useContext, useState } from 'react';

interface RecruiterModeContextType {
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
}

const RecruiterModeContext = createContext<RecruiterModeContextType | undefined>(undefined);

export const useRecruiterMode = () => {
  const context = useContext(RecruiterModeContext);
  if (!context) {
    throw new Error('useRecruiterMode must be used within a RecruiterModeProvider');
  }
  return context;
};

interface RecruiterModeProviderProps {
  children: React.ReactNode;
}

export const RecruiterModeProvider: React.FC<RecruiterModeProviderProps> = ({ children }) => {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);

  const toggleRecruiterMode = () => {
    setIsRecruiterMode(prev => !prev);
  };

  return (
    <RecruiterModeContext.Provider value={{ isRecruiterMode, toggleRecruiterMode }}>
      {children}
    </RecruiterModeContext.Provider>
  );
};