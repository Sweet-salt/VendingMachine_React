import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>지불 수단을 선택해 주세요</p>
      <Link to="/card">
        <button>카드</button>
      </Link>
      <Link to="/cash">
        <button>현금</button>
      </Link>
    </div>
  );
};

export default Home;
