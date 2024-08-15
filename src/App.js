import './App.css';
import { BrowserRouter , Routes, Route} from "react-router-dom";
import ViewConf from './views/pages/conference/ViewConf';
import Login from './views/pages/login/Login';
import SignUp from './views/pages/signup/SignUp';
import RegisterConf from './views/pages/conference/RegisterConf';
function App() {
  return (
    <>
    <BrowserRouter>
     <div>
       <Routes>
             <Route exact path="/Home" element={<ViewConf/>} />
             <Route exact path="/" element={<Login/>} />
             <Route exact path="/signup" element={<SignUp/>} />
             <Route exact path="/register/:id" element={<RegisterConf/>} />
       </Routes>
     </div>
   </BrowserRouter>
   </>
  );
}

export default App;
