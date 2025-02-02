import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-room" element={<CreateRoom />} />
        <Route path="/join-room" element={<JoinRoom />} />
      </Routes>
    </Router>
  );
}
