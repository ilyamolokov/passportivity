"use client";

interface ErrorBoundaryProps {
  error: Error;
}

const ErrorBoundary = (props: ErrorBoundaryProps) => {
  const { error } = props;
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <span>{error.message}</span>
    </div>
  );
};

export default ErrorBoundary;
