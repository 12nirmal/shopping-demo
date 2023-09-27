import React from "react";
const Abouts = () => {
  return (
    <>
      <div className="about">
        <div className="container-1">
          <div className="rows d_flex">
            <div className="col-md-7">
              <div className="about_img">
                <figure>
                  <img
                    className="hello imgs"
                    src="https://img.freepik.com/premium-vector/mobile-phone-connected-laptop-computer_389832-1117.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>

            <div className="col-md-5">
              <div className="titlepage">
                <h2>About</h2>
                <p className="hey p">
                  Here are some of the key differences between the two devices:
                  Phones are smaller and more portable than laptops. They can
                  fit in your pocket and are easy to carry around with you.
                  Laptops have larger screens and keyboards, making them better
                  for tasks that require a lot of typing or looking at large
                  amounts of data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Abouts;
