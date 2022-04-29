import { Link } from "react-router-dom";
import { CartState } from "../Context";

const Header = () => {
  const { cart } = CartState();

  return (
    <div className="mt-5">
      <span className="display-5 border px-5 " style={{ marginLeft: "40%" }}>
        Your personal Shop
      </span>
      <ul className="nav" style={{ float: "right" }}>
        <li className="prod">
          <Link className="btn btn-primary mx-5 mt-3" to="/">
            Home Page
          </Link>
        </li>
        <li className="prod1">
          <Link className="btn btn-primary mx-3 mt-3" to="/cart">
            Cart ({cart.length})
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
