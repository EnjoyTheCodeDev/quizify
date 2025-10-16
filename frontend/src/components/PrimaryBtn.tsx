import clsx from "clsx";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const PrimaryBtn: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      type="button"
      className={clsx(
        "py-0.5 px-2 rounded-sm opacity-90 hover:opacity-100",
        "bg-primary-blue",
        "text-sm md:text-lg font-semibold uppercase text-white",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
