import { useCurrentDate } from "./useCurrentDate";
import { StyledClock } from "./styled";

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

  return <StyledClock>Dzisiaj jest: {formatDate(date)}</StyledClock>;
};
