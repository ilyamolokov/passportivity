import Timestamp from "./timestamp";

const CommitItem = () => {
  return (
    <div className="flex flex-col w-full border border-slate-300 rounded-lg py-5 px-6 h-[100px] justify-between hover:border-blue-500 hover:text-blue-500 hover:cursor-pointer duration-200 ease-in-out">
      <span className="text-lg truncate">fix SSR hydration</span>

      <Timestamp />
    </div>
  );
};

export default CommitItem;
