import Image from 'next/image';
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

/**
 * A thin wrapper around next/image that sets sane defaults for this project.
 * - Lazy-loads by default (unless `priority` is true).
 * - Sets responsive `sizes` so the browser only downloads what it needs.
 * - Passes through all styling via `className`.
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width = 700,
  height = 700,
  priority = false,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      priority={priority}
    />
  );
};

export default OptimizedImage;
