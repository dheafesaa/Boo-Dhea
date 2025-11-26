"use client";

import { useState } from "react";
import type { CommentItem } from "../mockData/mockQuestions";
import AlertToast from "./Alert";
import Image from "next/image";
import { formatRelativeTime } from "../utils";

export default function CommentCard({
  comment,
  onReply,
}: {
  comment: CommentItem;
  onReply?: (c: CommentItem) => void;
}) {
  const [local, setLocal] = useState<CommentItem>(comment);
  const [alertMsg, setAlertMsg] = useState<string | null>(null);

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLocal((p) => ({
      ...p,
      liked: !p.liked,
      score: (p.score ?? 0) + (p.liked ? -1 : 1),
    }));
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const textToCopy = `${local.user.name}: ${local.text}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setAlertMsg("Tautan disalin!");
    } catch {
      setAlertMsg("Gagal menyalin tautan");
    }
  };

  const handleReply = (e: React.MouseEvent) => {
    e.stopPropagation();
    onReply?.(local);
  };

  return (
    <>
      {alertMsg && (
        <AlertToast message={alertMsg} onClose={() => setAlertMsg(null)} />
      )}

      <article className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4">
        <Image
          src={local.user.avatar ?? "/default-avatar.png"}
          alt={local.user.name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover shrink-0"
        />
        <div className="flex-1">
          <div className="flex justify-between items-center gap-2">
            <h4 className="font-semibold text-gray-900">{local.user.name}</h4>
            <div className="ml-auto text-xs text-gray-400">
              {formatRelativeTime(local.createdAt)}
            </div>
          </div>
          <div className="flex items-center mt-2 gap-2">
            {local.mbti ? (
              <span className="text-xs px-2 py-1 rounded-full bg-teal-100 text-teal-800">
                {local.mbti}
              </span>
            ) : null}
            {local.enneagram ? (
              <span className="text-xs px-2 py-1 rounded-full bg-slate-900 text-white">
                {local.enneagram}
              </span>
            ) : null}
            {local.zodiac ? (
              <span className="text-xs px-2 py-1 rounded-full bg-teal-200 text-teal-900">
                {local.zodiac}
              </span>
            ) : null}
          </div>

          <p className="mt-3 text-gray-700 text-sm whitespace-pre-line">
            {local.text}
          </p>

          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
            <button
              onClick={toggleLike}
              aria-label={`like-comment-${local.id}`}
              className="flex items-center gap-2 hover:text-teal-500"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill={local.liked ? "#4edcd8" : "none"}
                stroke={local.liked ? "#4edcd8" : "currentColor"}
              >
                <path d="M12 21.35c-.3 0-.6-.1-.8-.3C6.1 16.7 3 13.8 3 9.9 3 7 5.1 5 7.5 5c1.6 0 3.1.8 4 2 .9-1.2 2.4-2 4-2C18.9 5 21 7 21 9.9c0 3.9-3.1 6.8-8.2 11.15-.2.2-.5.3-.8.3z" />
              </svg>
              <span className="text-gray-700">{local.score ?? 0}</span>
            </button>

            <button
              onClick={handleShare}
              aria-label={`share-comment-${local.id}`}
              className="flex items-center gap-2 hover:text-gray-700"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
                <path d="M16 6l-4-4-4 4" />
                <path d="M12 2v13" />
              </svg>
            </button>

            <button
              onClick={handleReply}
              aria-label={`reply-comment-${local.id}`}
              className="ml-auto text-sm text-gray-400 hover:text-gray-600"
            >
              Balas
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
