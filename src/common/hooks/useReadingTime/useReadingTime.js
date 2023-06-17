const useReadingTime = (article) => {
  const wpm = 225;
  const words = article.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
};
