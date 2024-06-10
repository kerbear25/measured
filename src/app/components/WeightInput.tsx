'use client';

import { useState } from 'react';

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
      <p>
        Welcome! Take this short quiz to see if you&apos;re eligible for
        prescription weight loss with Measured.
      </p>
      <label>
        Enter Your Weight:
        <br />
        <input
          className={`border p-2 ${
            hasValidWeight === false ? 'border-red-500' : ''
          }`}
          onChange={handleWeightChange}
          type="number"
          value={weight}
        />
      </label>
      <br />
      {hasValidWeight === false && (
        <p className="text-red-500">Weight must be a positive number.</p>
      )}
      <button
        className={`bg-blue-500 text-white p-2 mt-2 ${
          hasValidWeight !== true ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={hasValidWeight !== true}
        onClick={handleNext}
      >
        Next
      </button>
    </>
  );
}
