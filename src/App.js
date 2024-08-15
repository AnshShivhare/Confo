import './App.css';
import { BrowserRouter , Routes, Route} from "react-router-dom";
import AddConf from './views/pages/AddConf';
import View from './views/pages/View';
import UpdateConf from './views/pages/UpdateConf';
import ViewConf from './views/pages/ViewConf';
import Login from './views/pages/Login';

function App() {
  return (
    <>
     <BrowserRouter>
      <div>
        <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/home" element={<View/>} />
              <Route exact path="/add-conference" element={<AddConf/>} />
              <Route exact path="/update-conference/:id" element={<UpdateConf/>} />
              <Route exact path="/view-conference/:id" element={<ViewConf/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
