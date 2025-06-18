import React, { createContext, useReducer, useContext } from 'react';
import { initialState } from './initialState';

const AppStateContext = createContext();

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, userInput: action.payload };
    case 'START_GENERATION':
      return { 
        ...state, 
        isLoading: true,
        isAnimating: true // 添加这行以启用动画
      };
    case 'STOP_LOADING':
      return { 
        ...state, 
        isLoading: false,
        isAnimating: false // 可选：在停止加载时也停止动画
      };
    case 'SET_PROP_DATA':
      return {
        ...state,
        currentProp: action.payload,
        currentView: 'prop',
        isLoading: false,
      };
    case 'NAVIGATE_TO_INPUT':
      return {
        ...state,
        currentView: 'input',
        shouldNavigateToInput: true, // 添加这行以触发输入页面导航
        shouldNavigateToProp: false // 确保不会跳转到道具页面
      };
    case 'NAVIGATE_TO_PROP': // 新增的 action 类型
      return {
        ...state,
        currentView: 'prop',
        shouldNavigateToProp: true, // 添加这行以触发道具页面导航
        shouldNavigateToInput: false // 确保不会跳转到输入页面
      };
    case 'RESET_NAVIGATION': // 新增的 action 类型
      return {
        ...state,
        shouldNavigateToProp: false,
        shouldNavigateToInput: false
      };
    default:
      return state;
  }
}

export function AppStateProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
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