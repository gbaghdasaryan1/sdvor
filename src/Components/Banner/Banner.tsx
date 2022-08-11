import React from "react";
import classes from "./Banner.module.css";
import BanerImg from "../../assets/Banner2.png";

const Banner = () => {
  return (
    <div
      className={classes.Banner}
      style={{ backgroundImage: `url(${BanerImg})` }}
    >
      <div className={classes.BanerContent}>
        <p>Чёрная пятница</p>
        <span>
          Давно установлено, что читатель будет отвлекаться на удобочитаемое
          содержимое страницы, глядя на ее макет.
        </span>

        <button>Оставить заявку</button>
      </div>
    </div>
  );
};

export default Banner;
