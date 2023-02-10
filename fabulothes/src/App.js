import './App.css';
import MainPageContainer from './components/main-page/mainPageContainer';
import NavBarContainer from "./components/navigation-bar/navBarContainer"

function App() {
  return (
    <div className="App">
      <NavBarContainer />
      <MainPageContainer />
    </div>
  );
}

export default App;
