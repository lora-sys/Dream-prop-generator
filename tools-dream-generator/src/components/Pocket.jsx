import React from 'react';
import { motion } from 'framer-motion';
import { useAppState } from "../state/Appstate";

export default function Pocket() {
  const { state, dispatch } = useAppState();

  const handleClick = () => {
    if (state.isLoading) return;
    console.log("Dispatching START_GENERATION");
    dispatch({ type: 'START_GENERATION' });
    
    // 添加一个短暂的延迟后清除加载状态
    setTimeout(() => {
      dispatch({ type: 'STOP_LOADING' });
    }, 1500); // 根据动画持续时间调整这个值
  };

  return (
    <div className='flex justify-center pb-8'>
      <motion.div
        className='relative'
        animate={{
          y: state.isLoading ? [-5, 5, -5] : 0,
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 1.5,
            ease: 'easeInOut',
          },
        }}
      >
        {/* 口袋动画 */}
        <motion.div
          className='bg-blue-500 w-24 h-16 rounded-b-full felx items-center justify-center cursor-pointer'
          onClick={handleClick}
          animate={{
            rotateX: state.isLoading ? 30 : 0,
            scale: state.isLoading ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <span className='text-white'>口袋</span>
        </motion.div>
        {/* 飞出的道具图标 */}
        {state.isLoading && (
          <motion.div
            className='absolute top-0 left-1/2 text-2xl '
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0.8, 0],
              y: [0, -100, -200],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 1.5,
              times: [0, 0.3, 1],
            }}
          >
            ✨
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
