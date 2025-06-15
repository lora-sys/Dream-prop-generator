import React, { useContext } from 'react';
import { AppStateContext } from './Appstate';

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
}