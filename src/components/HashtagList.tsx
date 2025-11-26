"use client";

import type { Hashtag } from "../mockData/mockHashtags";

interface Props {
  items: Hashtag[];
}

export default function HashtagList({ items }: Props) {
  return (
    <aside className="w-full md:w-64 lg:w-72">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Alam Semesta</h3>
        <div className="custom-scroll max-h-[600px] overflow-y-auto space-y-3 pr-1">
          {items.map((h) => (
            <div key={h.id} className="flex items-center justify-between">
              <span className="inline-block px-3 py-2 rounded-full bg-white shadow-md text-xs">
                {h.tag}
              </span>
              <span className="text-xs text-gray-400">{h.countLabel}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
