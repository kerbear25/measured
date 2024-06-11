'use client';

import { useQuiz } from '@/app/context/QuizContext';

export default function Confirmation() {
  const { quizData } = useQuiz();

  return (
    <div className="max-w-md mx-auto py-6">
      <h2 className="text-xl font-semibold pb-4 text-center">
        Thank you for submitting the quiz!
      </h2>
      <div className="flex flex-col items-center">
        <p>Weight: {quizData.weight} pounds</p>
        <p>Birthday: {quizData.birthday?.toLocaleDateString()}</p>
        <p>Email: {quizData.email}</p>
      </div>
    </div>
  );
}
