import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./Home";
import Cash from "./Cash";
import Card from "./Card";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  width: 300px;
  height: 550px;
  background-color: orange;
  position: relative;

  h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }
  button {
    width: 50%;
    margin: auto;
    border-radius: 10px;
  }
`;
export default function App() {
  return (
    <Container>
      <h1>음료수 자판기</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cash" element={<Cash />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </Container>
  );
}
