import { unstable_noStore as noStore } from "next/cache";
import { getCommits } from "./actions";
import CommitsComponent from "./components/commits-component";

// export const dynamic = "force-dynamic";

export default async function Home() {
  noStore();
  const commits = await getCommits();

  return <CommitsComponent commits={commits} />;
}
