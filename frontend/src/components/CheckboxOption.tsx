"use client";

import { useFieldArray, UseFormRegister, Control } from "react-hook-form";

type QuestionType = "BOOLEAN" | "INPUT" | "CHECKBOX";

interface Option {
  text: string;
  isCorrect: boolean;
}

interface Question {
  text: string;
  type: QuestionType;
  options?: Option[];
}

interface QuizFormData {
  title: string;
  questions: Question[];
}

const CheckboxOptions = ({
  control,
  register,
  index,
}: {
  control: Control<QuizFormData>;
  register: UseFormRegister<QuizFormData>;
  index: number;
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions.${index}.options`,
  });

  return (
    <div className="mt-4 border-t border-primary-blue/30 pt-4">
      <div className="flex items-center justify-between">
        <span className="font-medium text-primary-blue">Options</span>
        <button
          type="button"
          onClick={() => append({ text: "", isCorrect: false })}
          className="text-xs font-semibold text-primary-blue underline"
        >
          + Add option
        </button>
      </div>

      {fields.length === 0 && (
        <p className="text-xs text-gray-500 mt-2">
          No options yet. Add at least one.
        </p>
      )}

      <div className="mt-3">
        {fields.map((opt, optIndex) => (
          <div
            key={opt.id}
            className="flex items-center gap-3 bg-white rounded-sm"
          >
            <input
              type="text"
              className="flex-1 p-1 rounded-sm text-sm"
              placeholder={`Option ${optIndex + 1}`}
              {...register(`questions.${index}.options.${optIndex}.text`, {
                required: "Option text required",
              })}
            />

            <button
              type="button"
              onClick={() => remove(optIndex)}
              className="text-xs text-red-400 font-semibold"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxOptions;
