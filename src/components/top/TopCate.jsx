import React from "react";
import TopCart from "./TopCart";

const TopCate = () => {
  return (
    <div>
      <section className="topCat background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-feft row f_flex">
              <i className="fa fa"></i>
              <h2>Top Categories</h2>
            </div>
            <div className="heading-right ">
              <span>View All</span>
              <i className="fa fa-caret-right"></i>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </div>
  );
};

export default TopCate;
