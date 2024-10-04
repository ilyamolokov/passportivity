"use server";

export async function fetchCommits() {
  try {
    
  } catch (error: unknown) {
    throw new Error(
      error instanceof Error
        ? `Failed to fetch commits: ${error.message}`
        : "Failed to fetch commits due to an unknown error"
    );
  }
}
