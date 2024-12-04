import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Stopwatch from './components/Stopwatch'
const App=()=>{
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/counter" element={<h1>Counter App</h1>}></Route>
        <Route path="/stopwatch" element={<Stopwatch/>}></Route>
        <Route path="*" element={<h1>No page available</h1>}></Route>
      </Routes>
    </div>
  )
}
export default App;