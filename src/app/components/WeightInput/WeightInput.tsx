'use client';

import { useState } from 'react';
import './WeightInput.css';

export default function WeightInput() {
  const [hasValidWeight, setHasValidWeight] = useState<boolean | null>(null);
  const [weight, setWeight] = useState<number>(0);

  const handleNext = () => {
    // TODO: Navigate to the next question
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
