import "./App.css";
import FrontPage from "./pages/FrontPage";
import Navigation from "./components/Navbar";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <div className="App">
      <Navigation />
      <FrontPage />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
}
export default App;
