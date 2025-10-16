import { Quiz } from "@/types/quiz";

const API_URL = process.env.API_URL || "http://localhost:3001";

export async function getQuizzes(): Promise<Quiz[]> {
  const res = await fetch(`${API_URL}/quizzes`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch quizzes");
  return res.json();
}

export async function getQuizById(id: number): Promise<Quiz> {
  const res = await fetch(`${API_URL}/quizzes/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Quiz not found");
  return res.json();
}

export async function createQuiz(
  data: Omit<Quiz, "id" | "createdAt">,
): Promise<Quiz> {
  const res = await fetch(`${API_URL}/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create quiz");
  return res.json();
}
