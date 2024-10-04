"use client";

import Spinner from "./components/spinner-icon";

const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center h-full">
      <Spinner />
    </div>
  );
};

export default Loading;
