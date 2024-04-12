import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
