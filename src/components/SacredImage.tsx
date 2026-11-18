import React, { useState } from 'react';
import { Flame } from 'lucide-react';

interface SacredImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export const SacredImage: React.FC<SacredImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#2B1715] via-[#4A1C1F] to-[#1D1715] text-[#F5EFE6] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Flame className="w-8 h-8 text-[#E5B869] mb-2" strokeWidth={1.5} />
        {fallbackTitle && (
          <span className="font-display text-lg font-semibold tracking-wide text-[#F5EFE6]">
            {fallbackTitle}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
};
