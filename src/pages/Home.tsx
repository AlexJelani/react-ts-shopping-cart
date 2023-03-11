import { Link } from "react-router-dom";
import '../style/home.scss'

export function Home() {
  return (
    <>
      <div id="home">
        <Link to={"/store"}>
          <p id="shopBtn">Go Shopping</p>
        </Link>
      </div>
    </>
  );
}
