import { cn } from "@/utils/tailwind-utils";
import { type Alphabet, alphabets } from "@/utils/alphabet-utils";
import NumberRotation from "./number-rotation";

const TimeUnit = ({
  label,
  value,
  currentAlphabet,
}: {
  label: string;
  value: number;
  currentAlphabet: Alphabet;
}) => {
  return (
    <div className="flex flex-col">
      <div className="text-white text-3xl font-semibold">
        <NumberRotation number={value} />
      </div>
      <div
        className={cn("text-[8px] font-medium", {
          "text-purple-300": currentAlphabet === "a",
          "text-sky-300": currentAlphabet === "b",
          "text-yellow-300": currentAlphabet === "c",
          "text-teal-300": currentAlphabet === "d",
          "text-blue-300": currentAlphabet === "e",
          "text-green-300": currentAlphabet === "f",
          "text-orange-400": currentAlphabet === "g",
          "text-red-300": currentAlphabet === "h",
          "text-neutral-300": currentAlphabet === "i",
        })}
      >
        {label}
      </div>
    </div>
  );
};

export default TimeUnit;
