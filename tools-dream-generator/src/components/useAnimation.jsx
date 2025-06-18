import { useEffect } from 'react';
import { useAppState } from '../state/Appstate';

export const useAnimation = () => {
  const { state, dispatch } = useAppState();

  useEffect(() => {
    if (state.isAnimating) {
      // 模拟动画开始时的操作
      console.log('Animation started');
      
      // 假设动画持续时间为1500毫秒
      const animationDuration = 1500;
      
      // 在动画完成后更新 shouldNavigateToProp 状态
      const timer = setTimeout(() => {
        dispatch({ type: 'NAVIGATE_TO_PROP' });
        console.log('Navigation to prop triggered');
      }, animationDuration);
      
      // 清理定时器
      return () => clearTimeout(timer);
    }
  }, [state.isAnimating, dispatch]);

  return null; // 这个钩子不需要返回任何内容
};