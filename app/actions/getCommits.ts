"use server";

import { revalidatePath } from "next/cache";
import { Octokit } from "@octokit/rest";
import ICommit from "../types";

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN || "",
});
const owner = process.env.GITHUB_USERNAME || "";
const repo = process.env.GITHUB_REPO || "";

export async function getCommits(): Promise<ICommit[]> {
  try {
    const response = await octokit.repos.listCommits({
      owner,
      repo,
      sha: "master",
    });
    const data = response.data;
    const result = data.map((commit) => ({
      sha: commit.sha,
      message: commit.commit.message,
      authorName: commit.author?.name ?? null,
      authorLogin: commit.author?.login ?? null,
      date: commit.commit.author?.date ?? null,
    }));

    revalidatePath('/')
    
    return result;
  } catch (error: unknown) {
    throw new Error(
      error instanceof Error
        ? `Failed to fetch commits: ${error.message}`
        : "Failed to fetch commits due to an unknown error"
    );
  }
}
