const Skeleton = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <div className="w-full font-bold text-center h-24 md:h-12 max-w-[550px] bg-slate-200 rounded-lg"></div>

      <div className="flex flex-col w-full max-w-screen-md gap-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            style={{
              animationDelay: `${i * 0.05}s`,
              animationDuration: "1s",
            }}
            className="w-full bg-slate-200 rounded-lg py-5 px-6 h-[100px] duration-200 ease-in-out"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
