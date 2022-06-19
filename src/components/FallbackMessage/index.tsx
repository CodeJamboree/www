const FallbackMessage = ({
  message = "Loading...",
}: {
  message?: string;
}): JSX.Element => <>{message}</>;

export default FallbackMessage;
