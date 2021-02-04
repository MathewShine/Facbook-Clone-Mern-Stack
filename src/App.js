import './App.css';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import Feed from './Components/Feeds/Feed';


function App() {
  return (
    <div className="App">
        <Header />
          <div className="app_body">
            <SideBar />
            <Feed />
          </div>   
    </div>
  );
}

export default App;
