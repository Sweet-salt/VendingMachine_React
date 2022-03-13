import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Center = styled.button`
  width: 50%;
  margin: auto;
  display: block;
`;
const Cash = () => {
  const [cash, setCash] = useState(0);
  const [drink, setDrink] = useState(0);
  const [exchangeMoney, setExchangeMoney] = useState(0);
  const [isMoney, setIsMoney] = useState(false);
  const [pay, setPay] = useState(false);

  function inputMoney() {
    if (cash < 600) {
      console.log("최소투입 금액보다 작습니다.");
    } else {
      setIsMoney(true);
    }
  }
  function checkMoney() {
    if (drink > cash) {
      console.log("잔액이 부족합니다.");
    } else if (drink <= cash) {
      let change = cash - drink;
      setExchangeMoney(change);
      setPay(true);
      moveMain();
    }
  }
  function moveMain() {
    setTimeout(function () {
      window.location.href = "https://yokj4p.csb.app/";
    }, 3000);
  }
  return (
    <div>
      <p>현금을 넣고 확인을 누르세요(최소 600원)</p>
      <button onClick={() => setCash(cash + 10000)}>10,000원</button>
      <button onClick={() => setCash(cash + 5000)}>5,000원</button>
      <button onClick={() => setCash(cash + 1000)}>1,000원</button>
      <button onClick={() => setCash(cash + 500)}>500원</button>
      <button onClick={() => setCash(cash + 100)}>100원</button>
      <button onClick={inputMoney}>확인</button>
      <p>{cash}원</p>
      {isMoney ? (
        <div>
          <button onClick={() => setDrink(drink + 1100)}>1. 콜라 1100원</button>
          <button onClick={() => setDrink(drink + 600)}>2. 물 600원</button>
          <button onClick={() => setDrink(drink + 700)}>3. 커피 700원</button>
          <button onClick={() => setDrink(0)}>다시 선택</button>
          <p>총 결제 금액 {drink}</p>
          <button
            onClick={() => {
              checkMoney();
            }}
          >
            결제
          </button>
          <Link to="/">
            <button>다른 결제수단 선택</button>
          </Link>
          {pay ? (
            <div>
              <p>투입 금액 : {cash}원</p>
              <p>결제 금액 : {drink}원</p>
              <p>반환 금액 : {exchangeMoney}원</p>
              <Link to="/">
                <Center>메인으로 이동</Center>
              </Link>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Cash;
