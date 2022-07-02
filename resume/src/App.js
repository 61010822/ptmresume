import './App.css';
import ResumeContainer from "./ResumeContainer/ResumeContainer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, {useState, useEffect} from "react";
import ScrollService from '../src/utilities/ScrollService'

function App() {
    const [showTopBtn, setShowTopBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
  return (
    <div className="App">
      <ToastContainer/>
    <ResumeContainer/>
        {showTopBtn ?
            (<div className="home-btn-container">
            <button className="home-btn" onClick={() => ScrollService.scrollHandler.scrollToHome()}>
                <i className="fa fa-arrow-up"/>
            </button>
        </div>)
        : ("") }
    </div>
  );
}

export default App;
