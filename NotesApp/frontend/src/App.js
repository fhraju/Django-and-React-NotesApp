import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

function App() {
  return (
    <div className="container dark">
      <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<NotesListPage />} exact />
          <Route path="/notes/:id" element={<NotePage />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
