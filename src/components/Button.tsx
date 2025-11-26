"use client";

type RoundedButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

export default function RoundedButton({
  label,
  onClick,
  className = "",
}: RoundedButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2
        bg-[#4edcd8]
        text-sm
        text-black font-medium
        rounded-full 
        shadow-[0_0_25px_5px_rgba(127,226,224,0.45)]
        hover:brightness-110 
        active:scale-95
        transition-all
        ${className}
      `}
    >
      {label.toUpperCase()}
    </button>
  );
}
