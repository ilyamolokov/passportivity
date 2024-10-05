import { unstable_noStore as noStore } from "next/cache";
import { getCommits } from "./actions/getCommits";
import RepositoryInfo from "./components/repository-info";

export default async function Home() {
  noStore();
  const commits = await getCommits();

  return <RepositoryInfo commits={commits} />;
}
