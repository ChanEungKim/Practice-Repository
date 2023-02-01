import { Route, Routes, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import Page1 from "./pages/Page1";

function App() {
  return (
    <>
      <ScrollToTop />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
