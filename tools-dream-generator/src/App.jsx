import {BrowserRouter,Routes,Route} from 'react-router-dom';
import InputView from './views/inputView';
import PropView from './views/PropView';


function App() {
return (
<BrowserRouter>
<Routes>
  <Route  path='/' element={<InputView/>}/>
  <Route  path='prop' element={<PropView/>} />
</Routes>

</BrowserRouter>

)




}


export default App;