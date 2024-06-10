'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const QuizPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the first step
    router.push('/quiz/weight');
  }, [router]);

  return null;
};

export default QuizPage;
