import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InputView from './views/inputView';
import PropView from './views/PropView';
import { AppStateProvider } from './state/Appstate';

// 错误边界组件
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <AppStateProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<InputView />} />
            <Route path='prop' element={<PropView />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </AppStateProvider>
  );
}

export default App;