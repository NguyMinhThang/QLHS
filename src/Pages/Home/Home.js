import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function handleChange() {
    navigate("/class10");
  }
  const handleChange1 = () => {
    navigate("/class11");
  };
  const handleChange2 = () => {
    navigate("/class12");
  };
  return (
    <div className="container">
      <h1>Quản lý lớp học</h1>
      <h3>Danh sách lớp học</h3>
      <div className="class">
        <button onClick={handleChange}>Lớp 10</button>
        <button onClick={handleChange1}>Lớp 11</button>
        <button onClick={handleChange2}>Lớp 12</button>
      </div>
    </div>
  );
}

export default Home;
