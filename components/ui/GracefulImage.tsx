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

  if (!src || error) {
    return (
      <div
        className={cn(
          "w-full h-full min-h-[200px] flex items-center justify-center bg-slate-100 border border-slate-200 rounded-xl overflow-hidden",
          containerClassName
        )}
      >
        <p className="text-sm font-mono-label text-slate-400 uppercase tracking-widest text-center px-4">
          {fallbackText}
        </p>
      </div>
    );
  }

  return (
    <div className={cn("relative w-full h-full overflow-hidden", containerClassName)}>
      <Image
        src={src}
        alt={alt || ""}
        onError={() => setError(true)}
        className={cn("object-cover w-full h-full", className)}
        {...props}
      />
    </div>
  );
}
