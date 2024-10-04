"use client";

interface TimestampProps {
  date: string;
}

const Timestamp = (props: TimestampProps) => {
  const { date } = props;
  console.log(date);
  return <div>October 3 at 9:12 PM</div>;
};

export default Timestamp;
