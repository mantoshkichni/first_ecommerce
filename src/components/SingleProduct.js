import { CartState } from "../Context";
import "./style.css";
const SingleProduct = ({ prod }) => {
  const { cart, setCart } = CartState();
  return (
    <div className="container">
      <div className="row">
        <div className="col-auto">
          <div className="card mt-4" style={{ width: "18rem" }}>
            <img
              style={{ width: "17rem" }}
              src={prod.image}
              class="card-img-top  "
              alt={prod.name}
            />
            <div class="card-body">
              <h5 class="card-title">{prod.name}</h5>
              <span>₹ {prod.price.substring(0, 3)}</span>
              {cart.includes(prod) ? (
                <button
                  className=" btn btn-danger"
                  onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  className=" btn btn-success"
                  onClick={() => setCart([...cart, prod])}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
