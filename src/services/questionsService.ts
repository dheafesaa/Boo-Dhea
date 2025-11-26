import { mockQuestions, QuestionItem } from "../mockData/mockQuestions";

export interface QuestionsResponse {
  items: QuestionItem[];
}

export function getQuestions(): QuestionsResponse {
  return { items: mockQuestions };
}
