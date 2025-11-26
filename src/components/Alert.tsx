"use client";

import { useEffect, useState } from "react";

interface AlertToastProps {
  message: string;
  duration?: number;
  onClose?: () => void;
}

export default function AlertToast({
  message,
  duration = 1500,
  onClose,
}: AlertToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(false), duration);
    const t2 = setTimeout(() => onClose?.(), duration + 300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [duration, onClose]);

  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed top-6 left-1/2 -translate-x-1/2
        z-9999 flex items-center justify-center
        transition-all duration-300 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
    >
      <div
        className="w-full bg-white px-8 py-4 rounded-xl
                   shadow-[0_20px_50px_rgba(15,23,42,0.12),0_6px_20px_rgba(15,23,42,0.06)]
                   text-center"
      >
        <p className="text-black text-md">{message}</p>
      </div>
    </div>
  );
}
