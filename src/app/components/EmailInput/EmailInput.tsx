'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/lib/routes';
import './EmailInput.css';
import { isValidEmail } from '@/utils/emailUtils';
import { useQuiz } from '@/app/context/QuizContext';

export default function EmailInput() {
  const router = useRouter();
  const { quizData, setQuizData } = useQuiz();
  const [email, setEmail] = useState<string>(quizData.email || '');
  const [hasValidEmail, setHasValidEmail] = useState<boolean | null>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (email === '') {
      setHasValidEmail(null);
    } else {
      setHasValidEmail(isValidEmail(email));
    }
  }, [email]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleSubmit = () => {
    if (hasValidEmail) {
      setQuizData({ email });
      router.push(ROUTES.QUIZ.CONFIRMATION);
    }
  };

  return (
    <>
      <h2 className="pb-4">What&apos;s your email address?</h2>
      <div className="flex flex-col items-center">
        <input
          className={`mb-4 p-4 rounded-lg border ${
            hasValidEmail === null
              ? ''
              : hasValidEmail
              ? 'border-green-500'
              : 'border-red-500'
          }`}
          onChange={handleEmailChange}
          placeholder="Enter your email address."
          ref={emailInputRef}
          type="email"
          value={email}
        />
        {hasValidEmail === false && email !== '' && (
          <p className="text-red-500">Please enter a valid email address.</p>
        )}
        <button
          className={`next-button bg-blue-500 text-white p-2 mt-2 ${
            hasValidEmail !== true ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={hasValidEmail !== true}
          onClick={handleSubmit}
        >
          Next
        </button>
      </div>
    </>
  );
}