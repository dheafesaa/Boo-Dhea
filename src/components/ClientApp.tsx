"use client";

import { useEffect, useState, useMemo } from "react";
import HashtagList from "./HashtagList";
import Card from "./Card";
import Sidebar from "./Sidebar";

import { mockHashtags } from "../mockData/mockHashtags";
import {
  CommentItem,
  mockQuestions,
  QuestionItem,
} from "../mockData/mockQuestions";
import SearchBar from "./SearchBar";
import RoundedButton from "./Button";
import CommentCard from "./CardComments";

export default function ClientApp() {
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  });

  const [drawerOpen, setDrawerOpen] = useState(false);

  const initialActiveQuestion = useMemo(() => {
    if (!mockQuestions || mockQuestions.length === 0) return null;
    return mockQuestions.reduce<QuestionItem | null>((best, q) => {
      if (!best) return q;
      const bestScore = (best.likes ?? 0) + (best.comments ?? 0);
      const qScore = (q.likes ?? 0) + (q.comments ?? 0);
      return qScore > bestScore ? q : best;
    }, null);
  }, []);

  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(
    initialActiveQuestion ? initialActiveQuestion.id : null
  );

  useEffect(() => {
    let handle = 0;
    const onResize = () => {
      clearTimeout(handle);
      handle = window.setTimeout(() => {
        setCollapsed(window.innerWidth < 768);
      }, 120);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(handle);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const activeQuestion: QuestionItem | undefined = mockQuestions.find(
    (q) => q.id === activeQuestionId
  );

  const relatedQuestions = useMemo(
    () => mockQuestions.filter((q) => q.id !== activeQuestionId),
    [activeQuestionId]
  );

  const handleReply = (comment: CommentItem) => {
    console.log("Reply to comment:", comment.id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4">
      <div className="mx-auto px-6">
        <div className="flex justify-between mb-8 gap-4">
          <div className="flex items-center">
            <button
              aria-label="Toggle sidebar"
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={() => setCollapsed((s) => !s)}
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className={`flex items-center gap-2 ml-2 `}>
              <span className="font-bold text-lg">BOO</span>
            </div>
          </div>
          <SearchBar />
          <RoundedButton label="Masuk" />
        </div>
        <div className="flex gap-8">
          <div className="hidden md:block">
            <Sidebar collapsed={collapsed} />
          </div>
          {drawerOpen && (
            <div className="fixed inset-0 z-40 md:hidden">
              <div
                className="absolute inset-0 bg-black/30"
                onClick={() => setDrawerOpen(false)}
              />
              <div className="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-lg">
                <Sidebar collapsed={false} />
              </div>
            </div>
          )}

          <div className="hidden md:block w-72">
            <HashtagList items={mockHashtags} />
          </div>

          <div className="flex-2 max-w-2xl">
            <div className="flex justify-center mb-6">
              <RoundedButton className="lowercase text-xs" label="#questions" />
            </div>

            <div className="flex flex-col gap-6">
              {activeQuestion ? (
                <>
                  <div className="mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Pertanyaan Populer
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {activeQuestion.title}
                    </p>
                  </div>

                  {/* content of question */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    {activeQuestion.content ? (
                      <p className="text-gray-700 whitespace-pre-line">
                        {activeQuestion.content}
                      </p>
                    ) : (
                      <p className="text-gray-700">{activeQuestion.title}</p>
                    )}
                  </div>

                  {/* render comments (card) langsung di sini */}
                  <div className="space-y-6 mt-4">
                    {(activeQuestion.commentsData ?? []).map((comment) => (
                      <CommentCard
                        key={comment.id}
                        comment={comment}
                        onReply={handleReply}
                      />
                    ))}
                    {(activeQuestion.commentsData ?? []).length === 0 && (
                      <div className="text-sm text-gray-500">
                        Belum ada komentar.
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-sm text-gray-500">
                  Tidak ada pertanyaan aktif.
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 max-w-2xl">
            <h2 className="text-xl font-bold mb-4">Pos Terkait</h2>
            <div className="flex flex-col gap-6">
              {relatedQuestions.map((q) => (
                <div
                  key={q.id}
                  onClick={() => setActiveQuestionId(q.id)}
                  className={`cursor-pointer ${
                    activeQuestionId === q.id
                      ? "ring-2 ring-cyan-200 rounded-xl"
                      : ""
                  }`}
                >
                  <Card item={q} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
