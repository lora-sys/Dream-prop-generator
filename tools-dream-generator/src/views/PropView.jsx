import { useEffect } from "react";
import { useAppState } from "../state/Appstate";
import { generateProp } from "../services/apiService";
import { useNavigate } from "react-router-dom";
// 修复导入路径的大小写问题
import PropCard from "../components/PropCard.JSX"; // 将.jsx改为.JSX 以匹配实际文件名

export default function PropView(){
const navigate = useNavigate();
const {state,dispatch} = useAppState();
    console.log("current state",state);

// 移除可能导致循环导航的useEffect
/* useEffect(()=>{
if(state.currentView==='input'){
    navigate('/');
}
},[state.currentView,navigate]); */

// 更新useEffect监听shouldNavigateToInput
useEffect(() => {
  if (state.shouldNavigateToInput) {
    navigate('/');
  }
}, [state.shouldNavigateToInput, navigate]);

useEffect(()=>{
if(state.shouldNavigate){
    navigate('/prop');
}
},[state.shouldNavigate,navigate]);

useEffect(()=>{
    console.log('当前isloading ',state.isLoading);
    console.log('当前userInput',state.userInput);
if(state.isLoading && state.userInput){
    console.log("useefect");
const fetchProp=async()=>{
    console.log("call fetchprop");
    try{
    const propData=await generateProp(state.userInput);
    console.log("api返回",propData);
    dispatch({type:'SET_PROP_DATA',payload:propData});
    console.log("dispatching set prop data");
    }catch(error){
    console.log(error);
    dispatch({type:"SET_PROP_DATA",payload:{
        name:"生成失败",
        function:"请重试",
        appearance:"",
        steps:[],
        warning:""
    }});
    }
};
fetchProp();//根据依赖数组里面的变量来，每次改变一次就渲染一次
}
},[state.userInput,state.isLoading,dispatch]);

// 添加 useEffect 监听 currentProp 更新
if(!state.currentProp){
    return <div>加载中...</div>;
}
console.log("Currentprop",state.currentProp);
return (
<div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-4">
<PropCard propData={state.currentProp} />

<div className="flex justify-center mt-6">
  <button
    onClick={() => { dispatch({ type: 'NAVIGATE_TO_INPUT' }) }}
    className="w-full max-w-md bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
  >
    再试一次
  </button>
</div>
</div>
);
}