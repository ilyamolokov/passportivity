import { useFormStatus } from "react-dom";

const RefreshButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-transparent disabled:border-slate-200 disabled:text-slate-200 border-slate-300 enabled:hover:text-blue-500 py-2 px-4 border enabled:hover:border-blue-500 duration-200 ease-in-out rounded"
    >
      {pending ? "Loading" : "Refresh"}
    </button>
  );
};

export default RefreshButton;
