export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className="overflow-wrap break-word flex min-h-12 items-center rounded-md bg-blue-500 px-4 text-white hover:bg-blue-300"
      {...props}
    >
      {label}
    </button>
  );
};
