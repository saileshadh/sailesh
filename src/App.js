import Header from "./components/Head/Header"
import Home from "./components/Hero/Home"
import About from "./components/about/about"
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
