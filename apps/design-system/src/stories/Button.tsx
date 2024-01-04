export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className="flex items-center px-4 min-h-12 bg-blue-500 text-white rounded-md hover:bg-blue-300 overflow-wrap break-word"
      {...props}
    >
      {label}
    </button>
  );
};
