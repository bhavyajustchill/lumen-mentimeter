import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditPresentationPage from "./pages/EditPresentationPage";
import UploadDataPage from "./pages/UploadDataPage";
import ResultPage from "./pages/ResultPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact index element={<UploadDataPage />} />
        <Route path="/result" exact element={<ResultPage />} />
        <Route path="/edit-presentation" exact element={<EditPresentationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
