"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
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
  const defaultImage = "/images/construction/residential/hero.png";
  const effectiveSrc = (!src || error) ? defaultImage : src;

  return (
    <div className={cn("relative w-full h-full overflow-hidden", containerClassName)}>
      <Image
        src={effectiveSrc}
        alt={alt || ""}
        onError={() => setError(true)}
        className={cn("object-cover w-full h-full", className)}
        {...props}
      />
    </div>
  );
}
