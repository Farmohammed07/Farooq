import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-success fw-semibold'>
              Flavour E Azam
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
  <Nav.Link href='/' className='hover-blue active text-uppercase'>Home</Nav.Link>
  <Nav.Link href='/menu' className='hover-blue text-uppercase'>Menu</Nav.Link>
  <Nav.Link href='/about' className='hover-blue text-uppercase'>About</Nav.Link>
  <Nav.Link href='/contact' className='hover-blue text-uppercase'>Contact</Nav.Link>
</Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      {/* <footer className='bg-body-tertiary'>
        <p className='p-3 m-0 text-center'>copyright @ made by Farooq</p>
      </footer> */}
    </div>
  );
}

export default App;
