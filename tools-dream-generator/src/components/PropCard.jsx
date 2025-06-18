import React from 'react';
import {motion, stagger} from 'framer-motion';


export default function PropCard({propData}) {
//animation

const container = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item={
    hidden:{opacity:0,y:20},
    show:{opacity:1,y:0}
  };

  return (
  <motion.div
  className="bg-white rounded-xl shadow-lg max-w-md mx-auto p-6"
  variants={container}
  initial="hidden"
  animate="show"
  >
  <motion.h1
  className='text-2xl font-bold text-center mb-4 text-indigo-700 '
  variants={item}
  >
{propData.name}
  </motion.h1>

  <motion.div className="mb-4" variants={item}>
        <h2 className="font-semibold text-indigo-800">✨ 核心功能</h2>
        <p className='text-gray-600'>{propData.function}</p>
</motion.div>

<motion.div className="mb-4" variants={item}>
        <h2 className="font-semibold text-indigo-800">🔍 外观描述</h2>
        <p className='text-gray-600'>{propData.appearance}</p>
</motion.div>
<motion.div className="mb-4" variants={item}>
        <h2 className="font-semibold text-indigo-800">📝 使用指南</h2>
        <ol className="list-decimal pl-5">
        {propData.steps.map((step, index) => (
            <motion.li 
            key={index} 
            className="mb-1 text-gray-600"
            variants={item}
            >
            {step}
            </motion.li>
        ))}
        </ol>
    </motion.div>
    
    <motion.div 
        className="bg-yellow-50 border border-yellow-200 rounded-lg p-3"
        variants={item}
    >
        <h2 className="font-semibold text-yellow-700">⚠️ 副作用警报</h2>
        <p className='text-gray-600'>{propData.warning}</p>
    </motion.div>
</motion.div>

);



};
