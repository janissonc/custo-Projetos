import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/pages/home/Home';
import Contato from './components/pages/contato/Contato';
import Company from './components/pages/company/Company';
import NewProject from './components/pages/newProject/NewProject';
import Projects from './components/pages/projects/Projects';

import Container from './components/shared/layout/Container';
import NavBar from './components/shared/layout/navbar/NavBar';
import Footer from './components/shared/layout/footer/Footer';


function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contato' element={<Contato />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/newproject' element={<NewProject />} />
          <Route exact path='/projects' element={<Projects />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
