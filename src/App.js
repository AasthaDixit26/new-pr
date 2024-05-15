
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar';
import Textform from './Components/Textform'

function App() {
  return (
  <><Navbar title="TextUtils" />
    <div className='container'><Textform /></div></>
  );
}

export default App;
