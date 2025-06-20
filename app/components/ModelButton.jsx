'use client';
import { useState } from 'react';

export default function ModelButton({ endpoint }) {
  const [result, setResult] = useState(null);

  const handleClick = async () => {
    const res = await fetch(endpoint);
    const data = await res.json();
    setResult(data.prediction);
  };

  return (
    <div className="my-4">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Run Model
      </button>
      {result && <p className="mt-2 text-green-500">Prediction: {result}</p>}
    </div>
  );
}
