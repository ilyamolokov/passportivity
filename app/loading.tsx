import Skeleton from "./components/skeleton";

const Loading = () => {
  return (
    <section className="w-full flex flex-col items-center gap-5 py-12 px-3 animate-pulse">
      <button
        disabled={true}
        className="bg-transparent disabled:border-slate-200 disabled:text-slate-200 border-slate-300 py-2 px-4 border duration-200 ease-in-out rounded"
      >
        Loading
      </button>

      <Skeleton />
    </section>
  );
};

export default Loading;
