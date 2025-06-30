
"use client"; 

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const modelData = [
  {
    name: 'EfficientNetB0',
    confusion: '/projectImages/mri-CNN/efficientnet_cm.png',
    training: '/projectImages/mri-CNN/efficientnet_training.png',
  },
  {
    name: 'MobileNetV2',
    confusion: '/projectImages/mri-CNN/mobilenet_cm.png',
    training: '/projectImages/mri-CNN/mobilenet_training.png',
  },
  {
    name: 'Xception',
    confusion: '/projectImages/mri-CNN/xception_cm.png',
    training: '/projectImages/mri-CNN/xception_training.png',
  },
];

export default function ModelCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? modelData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === modelData.length - 1 ? 0 : prev + 1));
  };

  const current = modelData[currentIndex];

  return (
    <div className="w-full text-center">
      <h3 className="text-xl font-semibold mb-6">Visual Results</h3>

      <div className="flex justify-center items-center gap-4">
        <button onClick={handlePrev}>
          <ChevronLeft className="w-8 h-8 text-gray-600 dark:text-gray-300 hover:scale-110 transition" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div>
            <img
              src={current.confusion}
              alt={`${current.name} Confusion Matrix`}
              className="rounded-lg shadow-md w-full max-w-[500px] mx-auto"
            />
            <p className="mt-2 text-sm">{current.name} Confusion Matrix</p>
          </div>

          <div>
            <img
              src={current.training}
              alt={`${current.name} Training Metrics`}
              className="rounded-lg shadow-md w-full max-w-[500px] mx-auto"
            />
            <p className="mt-2 text-sm">{current.name} Training Metrics</p>
          </div>
        </div>

        <button onClick={handleNext}>
          <ChevronRight className="w-8 h-8 text-gray-600 dark:text-gray-300 hover:scale-110 transition" />
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Model {currentIndex + 1} of {modelData.length}
      </p>
    </div>
  );
}
