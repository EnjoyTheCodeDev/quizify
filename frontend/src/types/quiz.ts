export type QuestionType = "BOOLEAN" | "INPUT" | "CHECKBOX";

export interface Option {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  options?: Option[];
}

export interface Quiz {
  id: number;
  title: string;
  questions: Question[];
  createdAt: string;
}

export interface CreateOption {
  text: string;
  isCorrect: boolean;
}

export interface CreateQuestion {
  text: string;
  type: QuestionType;
  options?: CreateOption[];
}

export interface CreateQuiz {
  title: string;
  questions: CreateQuestion[];
}
