import { Routes, Route } from "react-router-dom";
import { Container, Box } from "@mui/material";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
function App() {
  return (
    <Box mb={4}>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
