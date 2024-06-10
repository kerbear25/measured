'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuiz } from '../../QuizContext';
import { ROUTES } from '@/lib/routes';
import './WeightInput.css';

export default function WeightInput() {
  const { quizData, setQuizData } = useQuiz();
  const router = useRouter();

  const [weight, setWeight] = useState<number>(quizData.weight || 0);
  const [hasValidWeight, setHasValidWeight] = useState<boolean | null>(null);

  useEffect(() => {
    if (weight > 0) {
      setHasValidWeight(true);
    }
  }, [weight]);

  const handleNext = () => {
    setQuizData({ weight });
    router.push(ROUTES.QUIZ.BIRTHDAY);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= 0 || isNaN(value)) {
      setHasValidWeight(false);
    } else {
      setHasValidWeight(true);
    }
    setWeight(value);
  };

  return (
    <>
      <p className="max-w-md mx-auto py-6">
        Welcome! Take this short quiz to see if you&apos;re eligible for
        prescription weight loss with Measured.
      </p>
      <div className="flex flex-col items-center">
        <label className="text-center">
          <h2 className="pb-4">Enter Your Weight:</h2>
          <input
            className={`rounded-lg text-center border p-2 ${
              hasValidWeight === false ? 'border-red-500' : ''
            }`}
            onChange={handleWeightChange}
            type="number"
            value={weight}
          />
        </label>
        {hasValidWeight === false && (
          <p className="text-red-500">Weight must be a positive number.</p>
        )}
        <button
          className={`next-button bg-blue-500 text-white p-2 mt-2 ${
            hasValidWeight !== true ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={hasValidWeight !== true}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  );
}
