import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Editor from './component/Editor';
import LandingPage from './component/LandingPage'; // Assuming the LandingPage is in the 'component' folder

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/docs/:id' element={<Editor />} />
      </Routes>
    </Router>
  );
}

export default App;
