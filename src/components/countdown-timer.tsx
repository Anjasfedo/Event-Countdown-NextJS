import { calculateTimeToEvent } from "@/utils/countdown-utils";
import { useEffect, useState } from "react";
import { type Alphabet, alphabets } from "@/utils/alphabet-utils";
import TimeUnit from "./time-unit";

const CountDownTimer = ({ currentAlphabet }: { currentAlphabet: Alphabet }) => {
  const [countDown, setCountDown] = useState(calculateTimeToEvent());

  useEffect(() => {
    const intervals = setInterval(() => {
      setCountDown(calculateTimeToEvent());
    }, 1000);
    return () => clearInterval(intervals);
  }, []);
  return (
    <div className="flex gap-[10px] text-center">
      <TimeUnit
        label="DAYS"
        value={countDown.days}
        currentAlphabet={currentAlphabet}
      />
      <TimeUnit
        label="HOURS"
        value={countDown.hours}
        currentAlphabet={currentAlphabet}
      />
      <TimeUnit
        label="MINUTES"
        value={countDown.minutes}
        currentAlphabet={currentAlphabet}
      />
      <TimeUnit
        label="SECONDS"
        value={countDown.seconds}
        currentAlphabet={currentAlphabet}
      />
    </div>
  );
};

export default CountDownTimer;
