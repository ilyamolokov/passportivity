import { fetchCommits } from "./actions";
import Commit from "./components/commit";

// export const dynamic = "force-dynamic";

export default async function Home() {
  const commits = await fetchCommits();
  const totalCommits = commits.length;

  return (
    <main className="w-full flex flex-col items-center gap-10 py-12">
      <h1 className="text-5xl font-bold text-center">
        <span className="text-blue-500">There are</span>{" "}
        {totalCommits === 1
          ? `${totalCommits} commit`
          : `${totalCommits} commits`}
      </h1>

      <div className="flex flex-col w-full max-w-screen-md gap-4">
        {commits.map((commit, index) => {
          console.log(commit);
          return (
            <Commit
              key={commit.sha}
              message={commit.commit.message}
              author={
                commit.author?.name ?? commit.author?.login ?? "anonymous"
              }
              date={commit.commit.author?.date ?? ""}
            />
          );
        })}
      </div>
    </main>
  );
}
