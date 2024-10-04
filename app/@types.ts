export default interface ICommit {
  sha: string;
  message: string;
  authorName: string | null;
  authorLogin: string | null;
  date: string | null;
}