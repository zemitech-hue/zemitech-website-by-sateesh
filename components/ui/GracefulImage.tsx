"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GracefulImageProps extends Omit<ImageProps, "src"> {
  src?: string | null;
  fallbackText?: string;
  className?: string;
  containerClassName?: string;
}

export default function GracefulImage({
  src,
  alt,
  fallbackText = "Image Coming Soon",
  className,
  containerClassName,
  ...props
}: GracefulImageProps) {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  // Use raw src if available, only fallback if src is completely empty or explicitly errored
  const effectiveSrc = (error || !src) ? "/images/construction/residential/hero.png" : src;

  return (
    <div className={cn("relative w-full h-full overflow-hidden", containerClassName)}>
      <Image
        key={src || "empty"}
        src={effectiveSrc}
        alt={alt || ""}
        unoptimized
        onError={() => {
          // Only log error if not already errored to prevent infinite re-render loop
          if (!error) {
            console.warn("GracefulImage failed to load:", src);
            setError(true);
          }
        }}
        className={cn("object-cover w-full h-full", className)}
        {...props}
      />
    </div>
  );
}


