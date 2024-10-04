"use server";

import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN || "",
});
const owner = process.env.GITHUB_USERNAME || "";
const repo = process.env.GITHUB_REPO || "";

export async function fetchCommits() {
  try {
    const response = await octokit.repos.listCommits({ owner, repo });
    // const response = await octokit.request(
    //   "GET /repos/{owner}/{repo}/commits",
    //   {
    //     owner,
    //     repo,
    //     headers: { "X-GitHub-Api-Version": "2022-11-28" },
    //   }
    // );
    return response.data;
  } catch (error: unknown) {
    throw new Error(
      error instanceof Error
        ? `Failed to fetch commits: ${error.message}`
        : "Failed to fetch commits due to an unknown error"
    );
  }
}
