"use client";

import { useState, useTransition } from "react";
import RefreshForm from "./refresh-form";
import { getCommits } from "../actions";
import ICommit from "../@types";
import Commits from "./commits";
import Loading from "../loading";
import Skeleton from "./skeleton";

interface RepositoryInfoProps {
  commits: ICommit[];
}

const RepositoryInfo = (props: RepositoryInfoProps) => {
  const { commits: initialCommits } = props;

  const [commits, setCommits] = useState(initialCommits);
  const [isPending, startTransition] = useTransition();

  const handleRefresh = () =>
    startTransition(async () => {
      try {
        const data = await getCommits();
        setCommits(data);
      } catch (e) {
        console.error("Failed to fetch commits:", e);
      }
    });

  return (
    <section className="w-full flex flex-col items-center gap-5 py-12 px-3">
      <RefreshForm onRefresh={handleRefresh} />

      {!isPending ? <Commits commits={commits} /> : <Skeleton />}
    </section>
  );
};

export default RepositoryInfo;
