import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import { QuestionDTO } from './models/QuestionDTO';
import { quizService } from './services/QuizService';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PracticeSet from './pages/PracticeSet';
import Dashboard from './pages/Dashboard';

function App() {

  const [isLoading,setIsLoading] = useState<boolean>(true);
  const [questions,setQuestions]=useState<QuestionDTO[]>([]);

  useEffect(()=>{
    quizService.getQuestions().then((x)=>{
      setQuestions(x.data);
      setIsLoading(false);
    })
  },[])

  return (
    <div >
        <Navbar/>
        <div className="main">
          <div className="article">
              <div className="left-nav-div article-section">
                 <h1>AWS Certified Cloud Practitioner</h1>
                 <div className="practice-sets-block">
                 <h1>
                   Practice sets
                 </h1>
                 <br />
                 <div className="practice-set">
                  <h1>Practice set 1</h1>
                  <span> Easy</span>
                 </div>
                 <div className="practice-set">
                  <h1>Practice set 2</h1>
                  <span> Medium</span>
                 </div>
                 <div className="practice-set">
                  <h1>Practice set 3</h1>
                  <span> Hard</span>
                 </div>
                 </div>
              </div>
              <div className="main-section-div article-section">
                 {isLoading?<Loading/>:(
                  <div className='main-content'>
                  <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/practice-set' element={<PracticeSet/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
                  </div>
                 )}
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;
