import { Component, type ReactNode } from "react"

type ErrorBoundaryProps = {
  children: ReactNode
  fallback?: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: any) {
    // You can log this to a service later (Sentry, LogRocket, etc.)
    console.error("ErrorBoundary caught an error:", error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="min-h-screen flex items-center justify-center text-center px-6">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                Something went wrong 😵
              </h1>
              <p className="text-gray-500">
                Please refresh the page or try again later.
              </p>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}
