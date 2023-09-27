import React, { useEffect, useState } from "react";
import "./ProductDatas.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
// import products from "../_mock/product_items";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addQty, decreaseQty, removeFromCart } from "../store/cart-reducer";
import axios from "axios";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((item) => item.cart);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://dummyjson.com/products")
        .then((result) => {
          console.log();

          setProducts(result.data.products);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item, _i) => {
      total = total + item.price * item.qty;
    });
    return total;
  };

  const increaseQuantity = (id) => {
    dispatch(addQty(id));
  };

  const decreaseQuantity = (id) => {
    dispatch(decreaseQty(id));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <>
      <section className="pb-5">
        <div className="BGRND">
          <div className="container1">
            <div className="row w-100">
              <div className="col-lg-12 col-md-12 col-12">
                <Link to="/product">
                  <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
                </Link>
                <p className="mb-5 text-center">
                  <i className="text-info font-weight-bold"></i> items in your
                  cart {cartItems.length > 0 ? `(${cartItems.length})` : ""}
                </p>
                <div
                  id="shoppingCart"
                  className="table table-condensed table-responsive"
                >
                  <div className="all">
                    <div className="P">Product</div>
                    <div className="PR">Price</div>
                    <div className="Q">Quantity</div>
                    <div className="T">Total Amount</div>
                  </div>
                  {cartItems.map((item, key) => {
                    const proData = products.find(
                      (data) => data.id === item.productId
                    );

                    return (
                      <div className="IMG-New" key={key}>
                        <div className="allData">
                          <div className="row">
                            <div className="col-md-3 text-left">
                              <img
                                src={proData?.thumbnail}
                                alt=""
                                className="Img-fluid d-none d-md-block rounded mb-2 shadow "
                              />
                            </div>
                            <div className="col-md-9 text-left mt-sm-2">
                              <h4 className="Pname">{proData?.title}</h4>
                            </div>
                            <div className="price">{proData?.price}₹</div>

                            <div className="Quantity">
                              <button
                                onClick={() => decreaseQuantity(item.productId)}
                                className="B Bn-primary"
                              >
                                -
                              </button>
                              <span className="B info">{item.qty}</span>
                              <button
                                onClick={() => increaseQuantity(item.productId)}
                                className="B Bn-primary"
                              >
                                +
                              </button>
                            </div>

                            <div className="Total-Amount">
                              <i className="fa-solid fa-sack-dollar"></i>
                              {proData?.price * item.qty}
                            </div>

                            <div className="actions">
                              <div className="text-right">
                                <button
                                  onClick={() =>
                                    handleRemoveFromCart(item.productId)
                                  }
                                  className="Btn btn-white border-secondary bg-white btn-md mb-2"
                                >
                                  <i className="fas fa-trash"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="float-right text-right">
                  <h4 className="SubTotal">TotalPrice</h4>
                  <h1 className="Total">₹{calculateTotal()}</h1>
                  <Link to="https://buy.stripe.com/test_dR67um2ht2hCeze145">
                    <button className="CheckBTN">Checkout</button>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                <Link to="/product">
                  <i className="fas fa-arrow-left mr-2">Continue Shopping</i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
