"use client";

import { useEffect, useState } from "react";

type TypedHeadingProps = {
  text: string;
  speed?: number;
  delay?: number;
};

export default function TypedHeading({
  text,
  speed = 70,
  delay = 120,
}: TypedHeadingProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    let intervalId: number | undefined;

    setDisplayed("");
    setDone(false);

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          if (intervalId !== undefined) {
            window.clearInterval(intervalId);
          }
          setDone(true);
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, [text, speed, delay]);

 return (
  <span className="typed-heading" aria-label={text.replace(/\n/g, " ")}>
    <span aria-hidden="true">
      {displayed.split("\n").map((line, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {line}
        </span>
      ))}
    </span>

    <span
      className={`typed-cursor ${done ? "typed-cursor-done" : ""}`}
      aria-hidden="true"
    />
  </span>
);
}