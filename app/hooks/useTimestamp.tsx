import { useEffect, useState } from "react";
import getTimestamp from "../utils/getTimestamp";

const useTimestamp = (isoDate: string) => {
  const [timestamp, setTimestamp] = useState(() => getTimestamp(isoDate));

  useEffect(() => {
    const updateTimestamp = () => {
      setTimestamp(getTimestamp(isoDate));
    };

    const intervalId = setInterval(updateTimestamp, 60000);

    updateTimestamp();

    return () => clearInterval(intervalId);
  }, [isoDate]);

  return timestamp;
};

export default useTimestamp;
