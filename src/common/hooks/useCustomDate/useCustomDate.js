export const useCustomDate = (date) => {
  const cmtHour =
    date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const cmtMinute =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const cmtDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const cmtYear =
    new Date().getFullYear() === date.getFullYear()
      ? ""
      : ` ${date.getFullYear()}`;
  const customDate = `${cmtDay} th${
    date.getMonth() + 1
  }${cmtYear}, lúc ${cmtHour}:${cmtMinute}`;

  return customDate;
};
