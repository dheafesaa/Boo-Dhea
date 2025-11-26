"use client";

import { menuItems, MenuItem } from "../mockData/mockMenuItems";

type IconProps = { name: MenuItem["iconName"]; className?: string };

function Icon({ name, className = "" }: IconProps) {
  const base = "w-6 h-6";
  switch (name) {
    case "home":
      return (
        <svg
          className={`${base} ${className}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeWidth="1.5"
            d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V11.5z"
          />
        </svg>
      );
    case "heart":
      return (
        <svg
          className={`${base} ${className}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeWidth="1.5"
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
          />
        </svg>
      );
    case "chat":
      return (
        <svg
          className={`${base} ${className}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeWidth="1.5"
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          />
        </svg>
      );
    case "profile":
      return (
        <svg
          className={`${base} ${className}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeWidth="1.5"
            d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM2 22a10 10 0 0 1 20 0"
          />
        </svg>
      );
    case "db":
      return (
        <svg
          className={`${base} ${className}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeWidth="1.5"
            d="M12 2C7.6 2 4 3.8 4 6v12c0 2.2 3.6 4 8 4s8-1.8 8-4V6c0-2.2-3.6-4-8-4z"
          />
        </svg>
      );
    case "test":
      return (
        <svg
          className={`${base} ${className}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path strokeWidth="1.5" d="M4 7h16M4 12h10M4 17h16" />
        </svg>
      );
    case "source":
      return (
        <svg
          className={`${base} ${className}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
          <path
            strokeWidth="1.5"
            d="M19.4 15A7.9 7.9 0 0 0 21 12a7.9 7.9 0 0 0-1.6-3M4.6 9A7.9 7.9 0 0 0 3 12a7.9 7.9 0 0 0 1.6 3"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function Sidebar({ collapsed }: { collapsed: boolean }) {
  return (
    <aside
      className={`h-screen sticky top-0 left-0 z-20 bg-transparent transition-all duration-200 ${
        collapsed ? "w-10" : "w-52"
      }`}
    >
      <div className="h-full flex flex-col">
        <nav className="flex-1 overflow-auto px-2 py-4">
          <ul className="flex flex-col gap-3">
            {menuItems.map((m) => (
              <li key={m.id}>
                <a
                  href={m.href ?? "#"}
                  className={`flex items-center gap-4 py-2 rounded-lg hover:bg-gray-50 transition-colors ${
                    collapsed ? "justify-center" : "justify-start"
                  }`}
                  aria-label={m.ariaLabel ?? m.label}
                >
                  <div className="text-gray-800">
                    <Icon name={m.iconName} />
                  </div>
                  <span
                    className={`text-sm text-gray-800 font-medium ${
                      collapsed ? "hidden" : "block"
                    }`}
                  >
                    {m.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
