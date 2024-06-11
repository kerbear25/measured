'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface QuizData {
  birthday: Date | null;
  email: string;
  weight: number;
}

interface QuizContextType {
  quizData: QuizData;
  setQuizData: (data: Partial<QuizData>) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [quizData, setQuizDataState] = useState<QuizData>({
    birthday: null,
    email: '',
    weight: 0,
  });

  const setQuizData = (data: Partial<QuizData>) => {
    setQuizDataState((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <QuizContext.Provider value={{ quizData, setQuizData }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
