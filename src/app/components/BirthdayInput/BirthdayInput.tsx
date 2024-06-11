'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuiz } from '@/app/context/QuizContext';
import { ROUTES } from '@/lib/routes';
import './BirthdayInput.css';

const months = [
  'Month',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = ['Day', ...Array.from({ length: 31 }, (_, i) => i + 1)];
const years = ['Year', ...Array.from({ length: 85 }, (_, i) => 2008 - i)];

export default function BirthdayInput() {
  const { setQuizData } = useQuiz();
  const router = useRouter();
  const [day, setDay] = useState<string>('0');
  const [hasValidDate, setHasValidDate] = useState<boolean | null>(null);
  const [month, setMonth] = useState<string>('0');
  const [year, setYear] = useState<string>('0');

  const validateDate = (m: string, d: string, y: string) => {
    const parsedDay = parseInt(d);
    const parsedMonth = parseInt(m);
    const parsedYear = parseInt(y);
    if (parsedMonth > 0 && parsedDay > 0 && parsedYear > 0) {
      const date = new Date(parsedYear, parsedMonth - 1, parsedDay);
      if (!isNaN(date.getTime()) && date.getDate() === parsedDay) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    setHasValidDate(validateDate(month, day, year));
  }, [month, day, year]);

  const handleNext = () => {
    if (hasValidDate) {
      const birthday = new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day)
      );
      setQuizData({ birthday });
      router.push(ROUTES.QUIZ.EMAIL);
    }
  };

  return (
    <div className="max-w-md mx-auto py-6">
      <h2 className="text-xl font-semibold pb-4 text-center">
        What&apos;s your date of birth?
      </h2>
      <div className="flex flex-col items-center">
        <div className="flex space-x-2">
          <select
            className="border p-2 rounded"
            onChange={(e) => setMonth(e.target.value)}
            value={month}
          >
            {months.map((month, index) => (
              <option
                key={index}
                disabled={index === 0}
                value={index === 0 ? '0' : index.toString()}
              >
                {month}
              </option>
            ))}
          </select>
          <select
            className="border p-2 rounded"
            onChange={(e) => setDay(e.target.value)}
            value={day}
          >
            {days.map((day, index) => (
              <option
                key={index}
                disabled={index === 0}
                value={index === 0 ? '0' : day.toString()}
              >
                {day}
              </option>
            ))}
          </select>
          <select
            className="border p-2 rounded"
            onChange={(e) => setYear(e.target.value)}
            value={year}
          >
            {years.map((year, index) => (
              <option
                key={index}
                disabled={index === 0}
                value={index === 0 ? '0' : year.toString()}
              >
                {year}
              </option>
            ))}
          </select>
        </div>
        <button
          className={`next-button bg-blue-500 text-white p-2 mt-4 rounded ${
            hasValidDate !== true ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={hasValidDate !== true}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
