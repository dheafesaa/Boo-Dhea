export interface UserComment {
  name: string;
  avatar?: string;
}

export interface CommentItem {
  id: number;
  user: UserComment;
  text: string;
  mbti?: string;
  enneagram?: string;
  zodiac?: string;
  score?: number;
  liked?: boolean;
  createdAt: string;
}

export interface QuestionItem {
  id: number;
  category: string;
  title: string;
  date: string;
  likes: number;
  comments: number;
  shares: number;
  content?: string;
  commentsData?: CommentItem[];
}

export const mockQuestions: QuestionItem[] = [
  {
    id: 1,
    category: "Pertanyaan Hari Ini",
    title: "Apa momen paling awkward yang bikin kamu ketawa sekarang?",
    date: "22-11-2025",
    likes: 8,
    comments: 3,
    shares: 12,
    content:
      "Ceritakan pengalaman paling awkward yang masih bikin kamu ketawa sampai sekarang.",
    commentsData: [
      {
        id: 1,
        user: {
          name: "Daniel Craig",
          avatar: "https://i.pravatar.cc/150?img=12",
        },
        text: `He thinks about future... (etc)`,
        mbti: "INTP",
        enneagram: "5w4",
        zodiac: "Aquarius",
        score: 23,
        liked: false,
        createdAt: new Date(Date.now() - 21 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: 2,
        user: { name: "Alexa Key", avatar: "https://i.pravatar.cc/150?img=45" },
        text: `More likely ENTP or ENFP...`,
        enneagram: "7w6",
        zodiac: "Leo",
        score: 79,
        liked: false,
        createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: 3,
        user: {
          name: "Florence Pugh",
          avatar: "https://i.pravatar.cc/150?img=32",
        },
        text: `I want Elon Musk to be an INTJ...`,
        mbti: "INTP",
        score: 15,
        liked: false,
        createdAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
      },
    ],
  },

  {
    id: 2,
    category: "Pertanyaan Hari Ini",
    title:
      "Kalau bisa makan satu makanan selamanya tanpa bosan, kamu pilih apa?",
    date: "6-11-2025",
    likes: 14,
    comments: 0,
    shares: 7,
    content:
      "Kalau cuma boleh makan satu makanan seumur hidup, apa dan kenapa?",
    commentsData: [],
  },

  {
    id: 3,
    category: "Pertanyaan Hari Ini",
    title:
      "Kalau bisa punya superpower untuk satu hari, kamu pilih apa dan mau ngapain?",
    date: "23-12-2025",
    likes: 19,
    comments: 0,
    shares: 9,
    content:
      "Bayangkan kamu hanya punya satu hari dengan superpower pilihanmu...",
    commentsData: [],
  },

  {
    id: 4,
    category: "Pertanyaan Hari Ini",
    title:
      "What would you choose: a relationship full of adventures or a peaceful one?",
    date: "23-12-2025",
    likes: 595,
    comments: 0,
    shares: 9,
    content: "Debat hangat: adventure vs peaceful. Mana yang kamu pilih?",
    commentsData: [],
  },
];
