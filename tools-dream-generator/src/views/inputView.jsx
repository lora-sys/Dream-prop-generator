import { useAppState } from "../state/Appstate";
import { useNavigate } from "react-router-dom";
export default function InputView() {
  const { state, dispatch } = useAppState();
  const navigator=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!state.userInput.trim()) return;
    console.log("dispatching start generation");
    dispatch({type:'START_GENERATION'});
     navigator('/prop');
  };
  return (
  <div className="min-h-screen bg-graident-to-b from-blue-50 to-indigo-100 flex flex-col">
    <div className="flex-grow flex items-center justify-center p-4 ">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">
          神奇道具生成器</h1>

          <form onSubmit={handleSubmit} className="mb-8">
          <div className="relative mx-auto">
          <input
          type="text"
          value={state.userInput}
          onChange={(e)=>{dispatch({type:"SET_INPUT",payload:e.target.value})}}
          placeholder="输入你的愿望..."
          className="w-full p-4 rounded-xl border-2 border-indigo-200 focus:border-indigo-400 focus:outline-none shadow-md bg-white text-gray-800"
          />
          <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-lg"
          >
          生成
          </button>
          </div>

          </form>
        <div className="bg-white rounded-xl p-4 shadow-md">
        <h2 className="font-semibold mb-2">试试这些例子</h2>
        <div className="flex flex-wrap gap-2">
          {['想考试得满分',
            '想瞬间学会做饭','想和远方朋友聊天','想飞上空中'
          ].map((text)=>(
            <button
            key={text}
            onClick={()=>{dispatch({type:'SET_INPUT',payload:text})}}
            className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-sm transition-colors"
            >
            {text}
            </button>
          ))}
        </div>
        </div>
      </div>
    </div>

    {/* 口袋按钮占位*/}

    <div className="flex justify-center pb-8 mt-auto">
      <div className="bg-blue-500 w-24 h-16 rounded-b-full flex items-center justify-center text-white font-semibold">
        口袋
        </div>
        </div>   

  </div>



  );


  
}