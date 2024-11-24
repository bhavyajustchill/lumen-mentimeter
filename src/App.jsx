import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditPresentationPage from "./pages/EditPresentationPage";
import UploadDataPage from "./pages/UploadDataPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" exact index element={<EditPresentationPage />} /> */}
        <Route path="/" exact index element={<UploadDataPage />} />
        <Route path="/result" exact element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
