import { useCurrentDate } from "../useCurrentDate";
import { StyleClock } from "./styled";

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
  const date = useCurrentDate();

  return (
    <StyleClock>
      Dzisiaj jest: {formatDate(date)}
    </StyleClock>
  )
};
