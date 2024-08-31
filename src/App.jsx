

import { useState } from 'react'
import Navbar from './components/Navbar'
import Newscard from './components/Newscard'
// import Bb from './components/bb'



const App = () => {
  const [type,setType]=useState("india")
  return (
    <div>
      <Navbar setType={setType}/>
       <Newscard type={type}/>
       
     </div>
  )
}

export default App
