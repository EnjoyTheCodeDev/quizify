import NavLink from "next/link";
import clsx from "clsx";

import { Quiz } from "@/types/quiz";

import TrashBtn from "@/components/TrashBtn";

type Props = {
  quiz: Quiz;
};

const QuizItem: React.FC<Props> = ({ quiz }) => {
  const { title, id } = quiz;

  return (
    <div
      className={clsx(
        "flex justify-between items-center",
        "border-2 border-primary-blue/80 p-1 md:p-3 rounded-sm",
      )}
    >
      <NavLink
        href={`/quizzes/${id}`}
        className="font-semibold text-lg text-primary-blue"
      >
        {title}{" "}
        <span className="font-medium text-base">({quiz.questions.length})</span>
      </NavLink>

      <TrashBtn />
    </div>
  );
};

export default QuizItem;
