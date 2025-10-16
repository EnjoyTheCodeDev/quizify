"use client";

import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const quizId = params.id;

  return <div>{quizId}</div>;
};

export default Page;
