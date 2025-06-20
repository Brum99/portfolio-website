'use client';
import Image from 'next/image';

export default function CustomImage({ src, alt, width = 800, height = 400 }) {
  return (
    <div className="my-6">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-xl shadow-md object-cover"
      />
    </div>
  );
}
