import { Route, Routes, BrowserRouter } from "react-router-dom";
import Page1 from "./pages/Page1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
