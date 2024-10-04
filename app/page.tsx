import { fetchCommits } from "./actions";
import CommitItem from "./components/commit-item";

export const dynamic = "force-dynamic";

export default async function Home() {
  const commit = await fetchCommits();
  console.log(commit)

  return (
    <main className="w-full flex flex-col items-center gap-10 py-12">
      <h1 className="text-5xl font-bold text-center">
        <span className="text-blue-500">There are</span> 13 commits
      </h1>

      <div className="flex flex-col w-full max-w-screen-md gap-4">
        {[1, 2, 3, 4, 5, 6, 7].map((commitItem, index) => (
          <CommitItem key={index} />
        ))}
      </div>
    </main>
  );
}
