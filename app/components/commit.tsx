import Timestamp from "./timestamp";

interface CommitProps {
  message: string;
  author: string;
  date: string;
}

const Commit = (props: CommitProps) => {
  const { message, author, date } = props;
  return (
    <div className="flex flex-col w-full border border-slate-300 rounded-lg py-5 px-6 h-[100px] justify-between hover:border-blue-500 hover:text-blue-500 hover:cursor-pointer duration-200 ease-in-out">
      <span className="text-lg truncate">{message}</span>

      <div className="flex justify-between text-sm">
        <span>by {author}</span>
        <Timestamp date={date}/>
      </div>
    </div>
  );
};

export default Commit;
