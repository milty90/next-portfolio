"use client";
interface ColorButtonProps {
  disabled?: boolean;
  color: string;
  text: string;
  border?: string;
  height?: string;
  onClick?: () => void;
}

export default function ColorButton({
  color,
  text,
  height,
  border,
  onClick,
  disabled,
}: ColorButtonProps) {
  return (
    <button
      className={`bg-${color} text-ink px-5 ${height ?? "py-2.5"} ${border}
       font-semibold text-[0.86rem] rounded-4xl whitespace-nowrap  hover:bg-ink hover:text-bg transition-color duration-300 `}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
