import Commit from "./commit";
import ICommit from "../types";

interface CommitsProps {
  commits: ICommit[];
}

const CommitList = (props: CommitsProps) => {
  const { commits } = props;
  const totalCommits = commits.length;

  return (
    <div className="w-full flex flex-col items-center gap-10">
      <h1 className="text-5xl font-bold text-center">
        <span className="text-blue-500">There are</span>{" "}
        {totalCommits === 1
          ? `${totalCommits} commit`
          : `${totalCommits} commits`}
      </h1>

      <div className="flex flex-col w-full max-w-screen-md gap-4">
        {commits.map((commit) => (
          <Commit
            key={commit.sha}
            message={commit.message}
            author={commit.authorName ?? commit.authorLogin ?? "anonymous"}
            date={commit.date ?? ""}
          />
        ))}
      </div>
    </div>
  );
};

export default CommitList;
