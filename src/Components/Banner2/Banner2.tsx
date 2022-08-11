import classes from "./Banner2.module.css";
import Img1 from "../../assets/Union.jpg";
import Img2 from "../../assets/Union2.jpg";

const Banner2 = () => {
  return (
    <div className={classes.Banner2}>
      <div>
        <div
          className={classes.Banner2Content}
          style={{ backgroundImage: `url(${Img1})` }}
        >
          <p>Скидка 10% при покупке от 3-х товаров</p>
          {/* <button>Посмотреть</button> */}
        </div>
      </div>
      <div>
        <div
          className={classes.Banner2Content}
          style={{ backgroundImage: `url(${Img2})` }}
        >
          <p>Скидка 10% при покупке от 3-х товаров</p>
          {/* <button>Посмотреть</button> */}
        </div>
      </div>
    </div>
  );
};

export default Banner2;
