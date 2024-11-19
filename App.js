
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Header2 from "./Header2";
import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import ButtonName from "./ButtonName";  
import './style.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="ButtonName" element={<ButtonName />} /> 
          </Route>

          <Route path="/page3" element={<Header2 />}>
            <Route index element={<Page3 />} />
            <Route path="page4" element={<Page4 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
