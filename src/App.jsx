// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import '{puppyList} from './data.js'
import '{ useState } from 'react'



function App() {
  const [puppies, setPuppies] = useState(puppyList)
  console.log(puppyList);
  return (
    <div>

    </div>
  )
}

export default App
