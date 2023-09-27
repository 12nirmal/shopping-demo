import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart-reducer";
import { useParams } from "react-router-dom";
// import product from "../_mock/product_items";/
import axios from "axios";

const Singlepage = () => {
  const dispatch = useDispatch();
  const selCartRef = useRef();
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((result) => {
          setDetails(result.data);
        })
        .catch((error) => console.log(error));
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  const addToCarthandler = () => {
    dispatch(
      addToCart({
        qty: selCartRef.current.value,
        productId: parseInt(id),
        price: details.price,
      })
    );
  };

  return (
    <>
      <div className="Row d_flex2">
        <div className="col-m-7">
          <img
            data={details?.id}
            className="default-img"
            src={details?.thumbnail}
            alt=""
          />
        </div>
        <div className="singlePage">
          <h2 className="PN">{details?.title}</h2>
          <h2 className="Des">{details?.description}</h2>
          <div className="col-sm-2">
            <div className="stat">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
            <span className="Label label-success">
              4.6
              <span className="glyphicon glyphicon-star"></span>
            </span>
          </div>
          <div className="col-sm-5">
            <span className="Ratings">2,421 Ratings & Reviews </span>
          </div>
          <h2 className="PM">{details?.price}</h2>
          <div>
            <label className="item-1-quantity">Quantity:</label>
          </div>

          <div className="Lable">
            <select ref={selCartRef} className="form-control" id="sel1">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>

          <button className="ADD" onClick={addToCarthandler}>
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
};

export default Singlepage;
