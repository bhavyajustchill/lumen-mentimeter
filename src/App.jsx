import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditPresentationPage from "./pages/EditPresentationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact index element={<EditPresentationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
