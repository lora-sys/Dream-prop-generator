import React, { useContext } from 'react';
import { AppStateContext } from './Appstate';

export const useAppState = () => {
    const context = useContext(AppStateContext)
    if (!context) {
        throw new Error('useAppState must be used within a AppStateProvider');
    }
    return context;
};