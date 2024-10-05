import { useEffect, useState } from "react";
import getTimestamp from "../utils/getTimestamp";

const useTimestamp = (isoDate: string) => {
  const [timestamp, setTimestamp] = useState(() => getTimestamp(isoDate));

  useEffect(() => {
    const now = new Date();
    const date = new Date(isoDate);
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const remainingSeconds = 60 - (seconds % 60);
    const timeToNextMinute = remainingSeconds * 1000;

    const updateTimestamp = () => {
      setTimestamp(getTimestamp(isoDate));
    };

    const timeoutId = setTimeout(() => {
      updateTimestamp();

      const intervalId = setInterval(updateTimestamp, 60000);

      return () => clearInterval(intervalId);
    }, timeToNextMinute);

    return () => clearTimeout(timeoutId);
  }, [isoDate]);

  return timestamp;
};

export default useTimestamp;
