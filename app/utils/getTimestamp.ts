const getTimestamp = (isoDate: string) => {
  const date = new Date(isoDate);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  const seconds = diff;
  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(diff / 3600);
  const days = Math.floor(diff / 86400);

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(0, 0, 0, 0);

  if (new Date(isoDate).getTime() >= yesterday.getTime() && days === 1) {
    return "yesterday";
  }

  if (days >= 7) {
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    if (date.getFullYear() !== now.getFullYear()) {
      options.year = "numeric";
    }

    return new Intl.DateTimeFormat("en-US", options).format(date);
  }

  if (seconds < 60) {
    return seconds <= 1 ? "just now" : `${seconds} seconds ago`;
  }

  if (minutes < 60) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  }

  if (hours < 24) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  }

  return days === 1 ? "1 day ago" : `${days} days ago`;
};

export default getTimestamp;
