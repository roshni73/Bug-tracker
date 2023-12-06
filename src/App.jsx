import { useState } from 'react'
import './App.css';
import BugList from './Views/bugList/index.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <BugList/>
   </>
  )

}
export default App;
