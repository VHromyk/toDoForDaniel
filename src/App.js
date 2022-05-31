import "./App.css";
import TodoPage from './pages/TodoPage'
import Container from './components/Container/Container'
import Header from "./components/Header/Header";
// import Stats from './components/Stats/Stats'
import { Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";


function App() {
  return (
      <Container>
          <Header />
          <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route
                  path="/signup"
                  element={<SignUpPage />}
              />
              <Route
                  path="/user/:userId"
                  element={<TodoPage />}
              />
          </Routes>
      </Container>
  );
}



export default App;
