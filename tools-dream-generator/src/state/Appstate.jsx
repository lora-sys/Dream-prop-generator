import React, { createContext, useReducer, useContext } from 'react';
import { initalState } from './initialState';

const AppStateContext = createContext();

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, userInput: action.payload };
    case 'START_GENERATION':
      return { ...state, isLoading: true };
    case 'STOP_PROP_DATA':
      return {
        ...state,
        currentProp: action.payload,
        currentView: 'prop',
        isLoading: false,
      };
    default:
      return state;
  }
}

export function AppStateProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initalState);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}

// 将 useAppState 钩子定义移回 Appstate.jsx
export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};