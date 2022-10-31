import "./App.css";
import FrontPage from "./pages/FrontPage";
import Navigation from "./components/Navbar";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ContactForm from "./pages/ContactForm";
import useLocalStorage from "use-local-storage";

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  
  return (
    <div className="App">
      <Navigation theme={theme} switchTheme={switchTheme}/>
      <FrontPage theme={theme} switchTheme={switchTheme}/>
      <Skills />
      <Projects theme={theme} switchTheme={switchTheme}/>
      <ContactForm />
    </div>
  );
}
export default App;
