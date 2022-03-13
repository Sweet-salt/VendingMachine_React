import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Center = styled.button`
  width: 50%;
  margin: auto;
  display: block;
`;
const Card = () => {
  const [drink, setDrink] = useState(0);
  const [card, setCard] = useState(false);
  const [pay, setPay] = useState(false);

  function moveMain() {
    setTimeout(function () {
      window.location.href = "https://yokj4p.csb.app/";
    }, 3000);
  }
  return (
    <div>
      <p>카드를 넣고 확인을 눌러주세요</p>
      <Center onClick={() => setCard(true)}>확인</Center>
      {card ? (
        <div>
          <p>음료를 선택해 주세요</p>
          <p>결제 수단 : 카드</p>
          <button onClick={() => setDrink(drink + 1100)}>1. 콜라</button>
          <button onClick={() => setDrink(drink + 600)}>2. 물</button>
          <button onClick={() => setDrink(drink + 700)}>3. 커피</button>
          <button onClick={() => setDrink(0)}>초기화</button>
          <p>총 결제 금액 {drink}</p>
          <button
            onClick={() => {
              setPay(true);
              moveMain();
            }}
          >
            결제하기
          </button>
          <Link to="/">
            <button>다른 결제수단 선택</button>
          </Link>
          {pay ? (
            <div>
              <p>{drink}원이 결제가 완료되었습니다.</p>
              <Link to="/">
                <Center>메인으로 이동하기</Center>
              </Link>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Card;
