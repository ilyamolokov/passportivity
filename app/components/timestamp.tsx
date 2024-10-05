"use client";

import useTimestamp from "../hooks/useTimestamp";

interface TimestampProps {
  date: string;
}

const Timestamp = (props: TimestampProps) => {
  const { date } = props;
  const timestamp = useTimestamp(date);

  return <div>{timestamp}</div>;
};

export default Timestamp;
