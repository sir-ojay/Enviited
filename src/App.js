import { Routes, Route , BrowserRouter} from "react-router-dom";
import './App.css';
import CreateEventPage from "./Pages/CreateEventPage/CreateEventPage";
import Eventpage from "./Pages/EventPage/Eventpage";
import LandingPage from "./Pages/LandingPage/LandingPage";


function App() {
  return (
    <div>
       <BrowserRouter>
    
       <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/createEvent" element={<CreateEventPage />} />
          <Route exact path="/eventpage" element={<Eventpage />} />
          </Routes>
   
    
      </BrowserRouter>
    </div>
  );
}

export default App;
