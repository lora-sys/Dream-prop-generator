export const initialState = {
  currentView: 'input',
  userInput: '',
  isLoading: false,
  isAnimating: false, // 保留已有的动画状态
  currentProp: null,
  history: [],
  animation: {
    phase: 0,
    iconPosition: { x: 0, y: 0 },
  },
  shouldNavigateToProp: false, // 新增的导航状态，用于跳转到道具页面
  shouldNavigateToInput: false, // 新增的导航状态，用于跳转到输入页面
};