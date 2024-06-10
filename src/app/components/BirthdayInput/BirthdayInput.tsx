'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '../../../lib/routes';
import { useQuiz } from '../../QuizContext';

export default function BirthdayInput() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const { setQuizData } = useQuiz();
  const router = useRouter();

  const handleNext = () => {
    if (day && month && year) {
      // TODO: Update quiz state with date of birth
      // setQuizData({});
      router.push(ROUTES.QUIZ.EMAIL);
    }
  };

  // TODO: Update styling for selects
  return (
    <div>
      <h2>What&apos;s your date of birth?</h2>
      <div>
        <label>
          <select value={month} onChange={(e) => setMonth(e.target.value)}>
            <option value="">Month</option>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
              <option key={month} value={month}>
                {new Date(0, month - 1).toLocaleString('default', {
                  month: 'long',
                })}
              </option>
            ))}
          </select>
        </label>
        <label>
          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="">Day</option>
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </label>
        <label>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Year</option>
            {Array.from({ length: 85 }, (_, i) => 2008 - i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
      </div>
      {/* TODO: Fix styling to match button in WeightInput */}
      <button
        className={`next-button bg-blue-500 text-white p-2 mt-2 ${
          !day || !month || !year ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={!day || !month || !year}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}
