import { useAppState } from "../state/Appstate";

export default function InputView() {
  const { state, dispatch } = useAppState();
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full space-y-6">
      <input
        type="text"
        value={state.userInput}
        onChange={(e) => dispatch({ type: 'SET_INPUT', payload: e.target.value })}
        className="bg-gray-400 font-bold rounded-md p-2"
        placeholder="Write your dream here..."
      />
      <button className="bg-gray-500 hover:bg-blue-500 cursor-pointer rounded">生成道具</button>
      <p className="text-2xl justify-center items-center bg-blue-600 ">当前输入:{state.userInput}</p>
    </div>
  );
}