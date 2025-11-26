"use client";

type SearchBarProps = {
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  className?: string;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "Cari",
  className = "",
}: SearchBarProps) {
  return (
    <div className={`w-full ${className}`}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>

      <div
        className="flex items-center gap-3 px-4 py-3 bg-white rounded-full shadow-sm
                   ring-1 ring-gray-100 focus-within:ring-2 focus-within:ring-blue-300
                   dark:bg-gray-800 dark:ring-0 dark:shadow-none"
        role="search"
      >
        {/* Icon */}
        <svg
          className="w-5 h-5 text-gray-400 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>

        <input
          id="search"
          type="search"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          className="flex-1 bg-transparent outline-none text-sm text-gray-700
                     placeholder-gray-400 #4edcd8
                     dark:text-gray-100"
        />
      </div>
    </div>
  );
}
