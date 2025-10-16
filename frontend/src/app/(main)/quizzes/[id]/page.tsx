"use client";

import React from "react";
import { useParams } from "next/navigation";

import { getQuizById } from "@/services/quizService";
import { Quiz } from "@/types/quiz";

const Page = () => {
  const params = useParams();
  const quizId = params.id;
  const [quiz, setQuiz] = React.useState<Quiz | null>(null);

  React.useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const quiz = await getQuizById(Number(quizId));

        setQuiz(quiz);
      } catch (error) {
        console.error("Failed to fetch quiz:", error);
      }
    };

    fetchQuiz();
  }, [quizId]);

  if (!quiz) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary-blue mb-6">
        {quiz.title}
      </h1>

      <ul className="flex flex-col gap-3">
        {quiz.questions.map((question) => (
          <li className="text-gray-400 text-sm" key={question.id}>
            {question.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
