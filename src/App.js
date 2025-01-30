import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import { DarkTheme, lightTheme } from "./components/Themes"
import {Switch,Route} from "react-router-dom"
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import EducationPage from './components/EducationPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';


function App() {
  return <>

  <GlobalStyle/>

  <ThemeProvider theme={DarkTheme}>
     <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/education" component={EducationPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/skills" component={MySkillsPage} />
     </Switch>

  </ThemeProvider>
    
    </>
    
}

export default App

