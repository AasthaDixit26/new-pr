
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar';
import Textform from './Components/Textform'
import { useState } from 'react';

function App() {
  const[mode,setMode]=useState('dark');
 const toggleBtn=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#515A5A ";
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      
     
    }
  }



  return (
    

  <>
  
  <Navbar title="TextUtils" mode={mode} toggleBtn={toggleBtn}/>
  <div className='container'>
    <Textform mode={mode} toggleBtn={toggleBtn} />
    </div></>
  );
}

export default App;
