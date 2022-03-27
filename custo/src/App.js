import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/pages/home/Home';
import Contato from './components/pages/contato/Contato';
import Company from './components/pages/company/Company';
import NewProject from './components/pages/projects/newProject/NewProject';
import Projects from './components/pages/projects/Projects';

import Container from './components/shared/layout/Container';
import NavBar from './components/shared/layout/navbar/NavBar';
import Footer from './components/shared/layout/footer/Footer';
import Project from './components/pages/projects/project/Project';


function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/contato' element={<Contato />} />
          <Route exact path='/newproject' element={<NewProject />} />
          <Route exact path='/project/:id' element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
