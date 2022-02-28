import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NewProject from './components/pages/newProject/NewProject';
import Home from './components/pages/home/Home';
import Contato from './components/pages/contato/Contato';
import Company from './components/pages/company/Company';
import Container from './components/shared/layout/Container';


function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contato"> Contato</Link></li>
        <li><Link to="/company"> company</Link></li>
        <li><Link to="/newproject"> newproject</Link></li>

      </ul>
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contato' element={<Contato />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/newproject' element={<NewProject />} />
        </Routes>
      </Container>
      <p>footer</p>
    </Router>
  );
}

export default App;
