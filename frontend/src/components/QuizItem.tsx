import NavLink from "next/link";

import { Quiz } from "@/types/quiz";

type Props = {
  quiz: Quiz;
};

const QuizItem: React.FC<Props> = ({ quiz }) => {
  const { title } = quiz;

  return (
    <div className="border-2 border-primary-blue/80 p-1 md:p-3 rounded-sm">
      <NavLink className="font-semibold text-lg text-primary-blue" href="/10">
        {title}
      </NavLink>
    </div>
  );
};

export default QuizItem;
