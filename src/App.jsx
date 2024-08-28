import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [mode, setMode]=useState('light')
  // const [count, setCount] = useState(0)
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null); 
    }, 1500 )

  }

  // let name='maaz'

  const toggleMode=()=>{
    if(mode=='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert('darkmode has been enabled', 'success');
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Lightmode has been enabled', 'success');
    }
  }

  return (
   <>
   <Router>
        <Navbar title="NAVBAR" select="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes> 
            <Route  exact path="/" element={
              <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
             } />
             <Route exact path="/about" />
          </Routes>
        </div>
       </Router>
       <About mode={mode} />
   </>
  )
}

export default App
