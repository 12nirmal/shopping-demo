import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart-reducer";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const item = props.item;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart({ qty: 1, productId: item.id, price: item.price }));
  };

  return (
    <>
      <div className="card hey">
        <div className="products">
          <div className="card_img">
            <Link to={`/listing-details/${item.id}`}>
              <img className="IMG" alt="" src={item.thumbnail} />
            </Link>
          </div>
          <div className="card_header">
            <h2 className="name">{item.title}</h2>
            <p className="price">{item.price}</p>
            <button
              type="button"
              name="item-1-button"
              id="item-1-button"
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
