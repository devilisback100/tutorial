
import { Xy, Textarea } from "./adj";
import './App.css';
import { useState } from "react";
import About_us from './about_us'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [alert, set_alert] = useState(null);
  const [navbar_mode, set_navbar_mode] = useState('light');
  const [button_name, set_button_name] = useState('Enable dark mode');
  let button = document.querySelector('.btn-close');
  function toggle() {
    if (navbar_mode === 'light') {
      set_navbar_mode('dark');
      set_button_name('Enable light mode');
      set_alert('Dark mode has been enabled successfully');
    } else {
      set_navbar_mode('light');
      set_button_name('Enable dark mode');
      set_alert('Light mode has been enabled successfully');
    }
    setTimeout(() => set_alert(null), 2000);
  }
  return (
    
  
     <>

       <Xy title='Text Analizer' mode={navbar_mode} toggle={toggle} button_name={button_name} />
    {alert && (
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        {alert}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )}
      <div>
        {/* <Routes>
          <Route exact path="/about" element={<About_us />} />
          <Route exact path="/" element={ */}
              <div><Textarea /></div>
          {/* } />
        </Routes> */}
         <About_us/> 
      </div>
    
            </>

  );
}
export default App;
