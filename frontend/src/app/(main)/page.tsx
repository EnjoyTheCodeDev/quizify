import QuizItem from "@/components/QuizItem";

import { Quiz } from "@/types/quiz";

const MOCK_QUIZ: Quiz[] = [
  {
    id: 10,
    title: "New Quiz",
    questions: [],
    createdAt: "2024-06-01T12:00:00Z",
  },
  {
    id: 12,
    title: "Another Quiz",
    questions: [],
    createdAt: "2024-06-02T12:00:00Z",
  },
];

export default function Page() {
  return (
    <ul className="flex flex-col gap-3 py-2 md:py-4">
      {MOCK_QUIZ.map((quiz) => (
        <li key={quiz.id} className="opacity-90 hover:opacity-100">
          <QuizItem quiz={quiz} />
        </li>
      ))}
    </ul>
  );
}
