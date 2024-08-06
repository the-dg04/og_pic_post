import './App.css';
import './colors.css'
import Navbar from './components/Navbar';
import PostForm from './components/Post';
import PostPage from './components/PostPage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
    <div className="wrapper">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<PostForm/>}/>
          <Route path="post/:title/:content" element={<PostPage/>}/>
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
