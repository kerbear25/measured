'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function QuizPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the first step
    router.push('/quiz/weight');
  }, [router]);

  return null;
}
