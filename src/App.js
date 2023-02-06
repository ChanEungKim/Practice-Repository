import { Route, Routes, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

localStorage.setItem("key", "1"); // 키 , 값

function App() {
  const Key = localStorage.getItem("key");
  console.log(Key);

  return (
    <>
      <ScrollToTop />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />}></Route>
          <Route path="/page2/:pageId" element={<Page2 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
