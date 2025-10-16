"use client";

import { useFieldArray, useForm } from "react-hook-form";

import PrimaryBtn from "@/components/PrimaryBtn";
import CheckboxOptions from "@/components/CheckboxOption";

import { createQuiz } from "@/services/quizService";

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

const Page = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<QuizFormData>({
    mode: "onBlur",
    defaultValues: {
      title: "",
      questions: [{ text: "", type: "BOOLEAN", options: [] }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit = async (data: QuizFormData) => {
    try {
      await createQuiz(data);
      reset();
      alert("Quiz created successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to create quiz.");
    }
  };

  const questions = watch("questions");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative space-y-10 mb-20"
    >
      <PrimaryBtn
        type="button"
        onClick={() => append({ text: "", type: "BOOLEAN", options: [] })}
        className="absolute right-0 z-10"
      >
        + Add question
      </PrimaryBtn>

      <label className="relative flex flex-col gap-2 text-lg font-medium text-primary-blue mb-10">
        Title
        <input
          type="text"
          className="font-base text-sm bg-primary-blue/10 py-2 px-3 rounded-sm max-w-md"
          placeholder="Enter quiz title"
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 5,
              message: "Title must be at least 5 characters",
            },
          })}
        />
        {errors.title && (
          <p className="absolute left-0 -bottom-5 mt-1 text-xs text-red-600 font-base">
            {errors.title.message}
          </p>
        )}
      </label>

      {fields.map((field, index) => {
        const questionType = questions?.[index]?.type;
        return (
          <div
            key={field.id}
            className="bg-primary-blue/10 rounded-md p-6 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-primary-blue text-lg">
                Question {index + 1}
              </h3>
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-sm text-red-400 font-semibold"
              >
                Remove
              </button>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-primary-blue">
                Text
              </span>
              <input
                type="text"
                className="bg-white p-2 rounded-sm text-sm"
                placeholder="Enter question text"
                {...register(`questions.${index}.text`, {
                  required: "Question text is required",
                })}
              />
              {errors.questions?.[index]?.text && (
                <p className="text-xs text-red-600">
                  {errors.questions[index]?.text?.message}
                </p>
              )}
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-primary-blue">
                Type
              </span>
              <select
                className="bg-white p-2 rounded-sm text-sm outline-none"
                {...register(`questions.${index}.type`)}
              >
                <option value="BOOLEAN">Boolean (True/False)</option>
                <option value="INPUT">Input (short answer)</option>
                <option value="CHECKBOX">Checkbox (multiple choice)</option>
              </select>
            </label>

            {questionType === "CHECKBOX" && (
              <CheckboxOptions
                control={control}
                register={register}
                index={index}
              />
            )}
          </div>
        );
      })}

      <div className="flex justify-end mt-10">
        <PrimaryBtn type="submit" disabled={isSubmitting || !isValid}>
          {isSubmitting ? "Saving..." : "Create Quiz"}
        </PrimaryBtn>
      </div>
    </form>
  );
};

export default Page;
