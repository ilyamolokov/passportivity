"use client";

import { useState } from "react";
import Commit from "./commit";
import RefreshForm from "./refresh-form";
import ICommit, { getCommits } from "../actions";
import ErrorBoundary from "../error";

interface CommitsComponentProps {
  commits: ICommit[];
}

const CommitsComponent = (props: CommitsComponentProps) => {
  const { commits: initialCommits } = props;

  const [commits, setCommits] = useState(initialCommits);
  const [isLoading, setIsLoading] = useState(false);

  const totalCommits = commits.length;

  const handleRefresh = async () => {
    setIsLoading(true);
    console.log('i am here')
    try {
      const data = await getCommits();
      setCommits(data);
    } catch (e) {
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="w-full flex flex-col items-center gap-10 py-12">
      <RefreshForm onRefresh={handleRefresh} />

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
    </section>
  );
};

export default CommitsComponent;
