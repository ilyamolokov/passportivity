import RefreshButton from "./refresh-button";

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
