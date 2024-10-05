"use client";

import { useTransition } from "react";
import RefreshForm from "./refresh-form";
import { getCommits } from "../actions/getCommits";
import ICommit from "../types";
import CommitList from "./commit-list";
import Skeleton from "./skeleton";

interface RepositoryInfoProps {
  commits: ICommit[];
}

const RepositoryInfo = (props: RepositoryInfoProps) => {
  const { commits } = props;
  const [isPending, startTransition] = useTransition();

  const handleRefresh = () =>
    startTransition(async () => {
      try {
        await getCommits();
      } catch (e) {
        console.error("Failed to fetch commits:", e);
      }
    });

  return (
    <section className="w-full flex flex-col items-center gap-5 py-12 px-3">
      <RefreshForm onRefresh={handleRefresh} />

      {!isPending ? <CommitList commits={commits} /> : <Skeleton />}
    </section>
  );
};

export default RepositoryInfo;
