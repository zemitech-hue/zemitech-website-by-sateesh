import { cn } from "@/lib/utils";

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

interface InitialsAvatarProps {
  name: string;
  className?: string;
}

export default function InitialsAvatar({ name, className }: InitialsAvatarProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-blue-950 text-white font-bold font-mono-label shrink-0",
        className
      )}
      aria-hidden="true"
    >
      {getInitials(name)}
    </div>
  );
}
