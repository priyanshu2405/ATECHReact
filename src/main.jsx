import React, { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '30px', color: '#ff6b6b', background: '#0a101d', minHeight: '100vh', fontFamily: 'monospace' }}>
          <h2>Application Rendering Error</h2>
          <pre style={{ whiteSpace: 'pre-wrap', marginTop: '16px', background: '#111827', padding: '16px', borderRadius: '8px' }}>
            {this.state.error?.toString()}
            {'\n\n'}
            {this.state.error?.stack}
            {'\n\nComponent Stack:\n'}
            {this.state.errorInfo?.componentStack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
} else {
  console.error("Root element #root not found!");
}

