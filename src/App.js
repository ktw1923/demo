import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import {Container} from "react-bootstrap";
import Home from "./page/product/Home";
import InsertForm from "./page/product/InsertForm";
import Detail from "./page/product/Detail";
import JoinForm from "./page/product/JoinForm";
import LoginForm from "./page/product/LoginForm";
import UpdateForm from "./page/product/UpdateForm";

function App() {
  return (
    <div>
      <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/insertForm" element={<InsertForm />} />
            <Route path="/product/:id" element={<Detail />} />
            <Route path="/joinForm" element={<JoinForm />} />
            <Route path="/loginForm" element={<LoginForm />} />
            <Route path="/updateForm:id" element={<UpdateForm />} />
          </Routes>
        </Container>
    </div>
  );
}

export default App;
