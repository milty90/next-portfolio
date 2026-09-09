"use client";
interface ColorButtonProps {
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
}: ColorButtonProps) {
  if (typeof window === "undefined") {
    console.log("1. SZERVER: komponens renderelése, HTML generálása");
  } else {
    console.log("4a. KLIENS: komponens újra-renderelése hidratáció közben");
  }

  return (
    <button
      className={`bg-${color} text-ink px-5 ${height ?? "py-2.5"} ${border}
       font-semibold text-[0.86rem] rounded-4xl whitespace-nowrap  hover:bg-ink hover:text-bg transition-color duration-300 `}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
