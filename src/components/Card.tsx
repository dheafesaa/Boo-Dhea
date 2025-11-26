"use client";

import { useState } from "react";
import type { QuestionItem } from "../mockData/mockQuestions";
import AlertToast from "./Alert";

interface CardProps {
  item: QuestionItem;
  onOpen?: (item: QuestionItem) => void;
}

export default function Card({ item, onOpen }: CardProps) {
  const [liked, setLiked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.href);
    setShowAlert(true);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked((v) => !v);
  };

  const handleOpen = () => {
    onOpen?.(item);
  };

  const handleCommentsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOpen?.(item);
  };

  return (
    <article
      onClick={handleOpen}
      className="w-full bg-white rounded-3xl p-6 shadow-md border border-gray-100 flex flex-col justify-between gap-2"
    >
      {showAlert && (
        <AlertToast
          message="Tautan disalin!"
          onClose={() => setShowAlert(false)}
        />
      )}

      <span className="text-sm text-gray-500">{item.category}</span>

      <div className="flex justify-between ">
        <h2 className="text-lg font-bold text-gray-900 flex-1 pr-3">
          {item.title}
        </h2>

        <span className="text-sm text-gray-400 shrink-0 whitespace-nowrap">
          {item.date}
        </span>
      </div>

      <div className="flex items-center gap-6 text-gray-600 text-sm">
        <button
          type="button"
          className="flex items-center gap-2"
          onClick={handleLike}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="w-5 h-5 transition-colors"
            style={{
              fill: liked ? "#4edcd8" : "transparent",
              stroke: liked ? "#4edcd8" : "#9ca3af",
              strokeWidth: 1.6,
            }}
          >
            <path d="M12 21.35c-.3 0-.6-.1-.8-.3C6.1 16.7 3 13.8 3 9.9 3 7 5.1 5 7.5 5c1.6 0 3.1.8 4 2 .9-1.2 2.4-2 4-2C18.9 5 21 7 21 9.9c0 3.9-3.1 6.8-8.2 11.15-.2.2-.5.3-.8.3z" />
          </svg>

          <span className={liked ? "text-[#4edcd8]" : "text-gray-600"}>
            {item.likes + (liked ? 1 : 0)}
          </span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCommentsClick}
            className="flex items-center gap-2 text-gray-500"
            aria-label={`comments-${item.id}`}
          >
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 006 14h12a1 1 0 00.707-1.707L18 11.586V8a6 6 0 00-6-6zm0 20a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <span className="text-gray-500">{item.comments}</span>
          </button>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 hover:text-blue-500"
          aria-label={`open-${item.id}`}
          onClick={handleShare}
        >
          <svg
            className="w-5 h-5 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
            <path d="M16 6l-4-4-4 4" />
            <path d="M12 2v13" />
          </svg>
        </button>
      </div>
    </article>
  );
}
