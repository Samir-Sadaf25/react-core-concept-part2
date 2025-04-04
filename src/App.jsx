
import './App.css'
import Counter from './counter'
import Batsman from './batsman'
function App() {
  
    function hnadleBtn()
    {
       alert('i am click 1')
    }
  return (
    <>
      
      <h3>Vite + React</h3>
       <Batsman></Batsman>
       <Counter ></Counter>
       <button onClick={hnadleBtn}>click-1</button>
       <button onClick={() => alert('i am click 2')}>click-2</button>
    </>
  )
}

export default App
