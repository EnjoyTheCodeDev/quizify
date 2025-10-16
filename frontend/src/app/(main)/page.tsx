import QuizItem from "@/components/QuizItem";

import { getQuizzes } from "@/services/quizService";

export default async function Page() {
  const quizzes = await getQuizzes();

  return (
    <ul className="flex flex-col gap-3 py-2 md:py-4">
      {quizzes.length > 0 ? (
        quizzes.map((quiz) => (
          <li key={quiz.id} className="opacity-90 hover:opacity-100">
            <QuizItem quiz={quiz} />
          </li>
        ))
      ) : (
        <p className="text-sm text-gray-500">No quizzes available.</p>
      )}
    </ul>
  );
}
