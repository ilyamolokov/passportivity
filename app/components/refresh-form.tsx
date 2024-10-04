"use client";

import RefreshButton from "./refresh-button";
import { getCommits } from "../actions";
import { useFormState } from "react-dom";

interface RefreshFormProps {
  onRefresh: () => void;
}

const RefreshForm = (props: RefreshFormProps) => {
  const { onRefresh } = props;
  return (
    <form action={onRefresh}>
      <RefreshButton />
    </form>
  );
};

export default RefreshForm;
