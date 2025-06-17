import { useEffect } from "react";
import { useAppState } from "../state/Appstate";
import { generateProp} from "../services/apiService";
import { useNavigate } from "react-router-dom";

export default function PropView(){
const  navigate=useNavigate();
const {state,dispatch}=useAppState();
    console.log("current state",state);
useEffect(()=>{
if(state.currentView==='input'){
    navigate('/')
}
},[state.currentView,navigate]);

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
console.log("Currntprop",state.currentProp);
return (
<div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-4">
<div className="bg-white rounded-xl shadow-lg max-w-md mx-auto p-6">
    <h1 className="text-2xl font-bold text-center mb-4 text-indigo-700">
        {state.currentProp.name}
    </h1>

<div className="mb-4">
<h2 className="font-semibold text-indigo-800">✨ 核心功能</h2>
<p  className="text-gray-600">{state.currentProp.function}</p>
</div>

<div className="mb-4">
<h2 className="font-semibold text-indigo-800"> 🔍 外观描述</h2>
<p className="text-gray-600">{state.currentProp.appearance}</p>
</div>

<div className="mb-4">
<h2 className="font-semibold text-indigo-800 ">📝 使用指南 </h2>
<ol className="list-decimal pl-5">
{state.currentProp.steps.map((step,index)=>(
    <li className="text-gray-600 mb-1" key={index}>{step}</li>
))}
</ol>
</div>

<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
<h2 className="font-semibold text-yellow-800">⚠️ 副作用警报</h2>
<p className="text-gray-600">{state.currentProp.warning}</p>
</div>

<button
onClick={()=>{dispatch({type:'NAVIGATE_TO_INPUT'})}}
className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"

>
再试一次
</button>



</div>

</div>


);



}



