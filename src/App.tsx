import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import { QuestionForQuiz } from './models/QuestionForQuizDTO';
import { quizService } from './services/QuizService';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PracticeSet from './pages/PracticeSet';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import CreatePracticeSet from './pages/CreatePracticeSet';
import Questions from './pages/Questions';
import CreateQuestion from './pages/CreateQuestion';
import ListOfQuestions from './pages/ListOfQuestions';
import PracticeSetCart from './components/PracticeSetCart';
import { useDispatch, useSelector } from 'react-redux';
import PracticeSetSingle from './pages/PracticeSetSingle';
import PracticeSetEdit from './pages/PracticeSetEdit';
import QuestionPreview from './components/QuestionPreview';
import { addQuestionToSingleSet, getPracticeSets } from './redux-slice/PracticeSetSlice';
import { Link } from 'react-router-dom';
import Result from './pages/Result';
import './css/responsive.css';
import AWSExams from './pages/AWSExams';
import Socials from './pages/Socials';
import AddMultipleQuestionsJSON from './pages/AddMultipleQuestionsJSON';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [questions, setQuestions] = useState<QuestionForQuiz[]>([]);
  const practiceSet = useSelector((state: any) => state.practiceSetCart);
  const [isPracticeSetEdit, setPracticeSetEdit] = useState(false);
  const [isQuestionPreviewToggled, setQuestionPreviewToggle] = useState(false);
  const [questionPreview, setQuestionPreview] = useState<any>();
  const dispatch = useDispatch<any>();
  const selector = useSelector((state: any) => state.practiceSet);

  useEffect(() => {
    quizService.getQuestions().then((x) => {
      setQuestions(x.data);
      setIsLoading(false);
    });
    dispatch(getPracticeSets());
    setPracticeSetEdit(selector.isEdit);
  }, [selector.isEdit]);

  const handlePreview = (e: any, x: any) => {
    setQuestionPreview(x);
    setQuestionPreviewToggle(true);
  };

  const handleAdd = (x: any) => {
    dispatch(addQuestionToSingleSet(x));
  };

  

  return (
    <div>
      {practiceSet.question.length > 0 && <PracticeSetCart title={practiceSet.title} count={practiceSet.question.length} />}

      <Navbar />
      <div className="main">
        <div className="article">
          <div className="left-nav-div article-section">
            {isPracticeSetEdit == false && (
              <div>
                <h1>AWS Certified Cloud Practitioner</h1>
                <div className="practice-sets-block">
                  <h1>Practice sets</h1>
                  <br />
                  
                  {selector.practiceSets.map((x: any) => {
                    return (
                      <Link key={x.id} style={{ textDecoration: 'none' }} to={"/quiz/practice-set/"+x.id}>
                      <div  className="practice-set">
                        <h1>{x.title}</h1>
                        <span> {x.difficulty}</span>
                      </div>
                      </Link>
                      
                    );
                  })}
                </div>
              </div>
            )}

            {selector.isEdit && (
              <div className="left-main-question-nav">
                <h1>Questions to add to practice set</h1>
                {questions.map((x) => {
                  return (
                    <div key={x.id} className="main-question-block">
                      <div className="question-title">{x.title}</div>
                      <div className="question-btns">
                        <button onClick={(e) => handlePreview(e, x)}>Preview</button>
                        <button onClick={() => handleAdd(x)}>Add</button>
                      </div>
                    </div>
                  );
                })}

                {isQuestionPreviewToggled && <QuestionPreview question={questionPreview} toggle={setQuestionPreviewToggle} />}
              </div>
            )}
          </div>

          <div className="main-section-div article-section">
            {isLoading ? (
              <Loading />
            ) : (
              <div className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/aws-exams" element={<AWSExams />} />
                  <Route path="/socials" element={<Socials />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/quiz/practice-set/:id" element={<Quiz />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/dashboard/practice-set" element={<PracticeSet />} />
                  <Route path="/dashboard/practice-set/:id" element={<PracticeSetSingle />} />
                  <Route path="/dashboard/practice-set/create" element={<CreatePracticeSet />} />
                  <Route path="/dashboard/practice-set/:id/edit" element={<PracticeSetEdit />} />
                  <Route path="/dashboard/questions" element={<Questions />} />
                  <Route path="/dashboard/questions/list" element={<ListOfQuestions />} />
                  <Route path="/dashboard/questions/create" element={<CreateQuestion />} />
                  <Route path="/dashboard/questions/multiple" element={<AddMultipleQuestionsJSON />} />
                  <Route path="/result" element={<Result />} />

                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />


                </Routes>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
