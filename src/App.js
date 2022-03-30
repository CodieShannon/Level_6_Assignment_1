//Import Navigation Menu
import Nav from './Nav';

//Import Pages
import SCP003 from './SCP-003';
import SCP004 from './SCP-004';
import SCP005 from './SCP-005';
import SCP006 from './SCP-006';

//Import Subject File Loader
import Loader from './Loader';

//Import React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Functions
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />

      <Routes>
        <Route path="/" element={<SCP002 />}/>
        <Route path="/SCP-003" element={<SCP003 />}/>
        <Route path="/SCP-004" element={<SCP004 />}/>
        <Route path="/SCP-005" element={<SCP005 />}/>
        <Route path="/SCP-006" element={<SCP006 />}/>
      </Routes>
    </Router>
  );
}

function SCP002(){
  //Return Subject File
  return Loader(2);
}

//Export
export default App;