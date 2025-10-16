import { Router } from "express";

import { prisma } from "../lib/prisma.js";

const router = Router();

router.get("/quizzes", async (_, res) => {
  const quizzes = await prisma.quiz.findMany({
    include: { questions: { include: { options: true } } },
  });
  res.json(quizzes);
});

router.get("/quizzes/:id", async (req, res) => {
  const quiz = await prisma.quiz.findUnique({
    include: { questions: { include: { options: true } } },
    where: { id: Number(req.params.id) },
  });
  if (!quiz) return res.status(404).json({ error: "Quiz not found" });
  res.json(quiz);
});

router.post("/create", async (req, res) => {
  const { questions, title } = req.body;

  try {
    const newQuiz = await prisma.quiz.create({
      data: {
        questions: {
          create: questions.map((q: { text: string; type: string; options?: { text: string; isCorrect: boolean }[] }) => ({
            options:
              q.options && q.options.length
                ? {
                    create: q.options.map((opt) => ({
                      isCorrect: opt.isCorrect,
                      text: opt.text,
                    })),
                  }
                : undefined,
            text: q.text,
            type: q.type,
          })),
        },
        title,
      },
      include: { questions: { include: { options: true } } },
    });
    res.status(201).json(newQuiz);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Invalid data" });
  }
});

router.delete("/quizzes/:id", async (req, res) => {
  const quizId = Number(req.params.id);

  try {
    const existing = await prisma.quiz.findUnique({ where: { id: quizId } });
    if (!existing) return res.status(404).json({ error: "Quiz not found" });

    await prisma.quiz.delete({
      where: { id: quizId },
    });

    res.json({ message: `Quiz ${quizId} deleted successfully` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete quiz" });
  }
});

export default router;
