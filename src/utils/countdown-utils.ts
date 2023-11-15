export const calculateTimeToEvent = () => {
  const eventDate = new Date("2023-11-22T00:00:00+07:00").toISOString();

  const currentDate = new Date();

  const eventDateObj = new Date(eventDate);
  const currentDateObj = new Date(currentDate);

  const timeRemaining = eventDateObj.getTime() - currentDateObj.getTime();

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};
