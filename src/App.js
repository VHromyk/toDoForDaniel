import "./App.css";
import TodoView from './views/todoView'
import Container from './components/Container/Container'
import Header from "./components/Header/Header";
import Stats from './components/Stats/Stats'
function App() {
  return (
    <Container>
        <Header />
        <Stats />
        <TodoView />
    </Container>
  );
}

export default App;
