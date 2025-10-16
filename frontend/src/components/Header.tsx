import NavLink from "next/link";

import clsx from "clsx";

const Header = () => {
  return (
    <header
      className={clsx(
        "flex items-center justify-between shadow",
        "mb-3 bg-white rounded-sm p-2 md:px-6 md:py-4",
      )}
    >
      <NavLink
        href="/"
        className="font-bold text-2xl md:text-3xl text-primary-blue"
      >
        Quizify
      </NavLink>

      <NavLink
        href="/create"
        className={clsx(
          "py-0.5 px-1 rounded-sm opacity-90 hover:opacity-100",
          "border-2 md:border-3 border-primary-blue shadow-sm",
          "text-sm md:text-lg font-semibold uppercase text-primary-blue",
        )}
      >
        Create quiz
      </NavLink>
    </header>
  );
};

export default Header;
