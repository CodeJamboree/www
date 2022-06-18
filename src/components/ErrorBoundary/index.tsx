import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  fallback?: ReactNode;
}

interface State {
  failed: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = { failed: false };
  static getDerivedStateFromError(_: Error): State {
    return { failed: true };
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError } = this.props;
    if (typeof onError !== "function") return;
    try {
      onError(error, errorInfo);
    } catch (e) {
      // do nothing
    }
  }
  public render(): JSX.Element {
    const { fallback = "Error", children } = this.props;
    return <Wrap>{this.state.failed ? fallback : children}</Wrap>;
  }
}

interface ElementProps {
  children: ReactNode;
}

const Wrap = ({ children }: ElementProps): JSX.Element =>
  React.isValidElement(children) ? children : <>{children}</>;

export default ErrorBoundary;
