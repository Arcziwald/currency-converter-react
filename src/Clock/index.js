import { useState, useEffect } from "react";
import "./clock.css";

const formatDate = (date) =>
  date.toLocaleString(undefined, {
    month: "long",
    weekday: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(() => new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className="clock">Dzisiaj jest: {formatDate(date)}</div>;
};
