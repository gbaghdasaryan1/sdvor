import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IProduct } from "../../../common/interfaces";
import ProductCard from "../../ProductCard/ProductCard";
import classes from "./Specials.module.css";

const Specials = () => {
  const [special, setSpecial] = useState<IProduct[]>([]);
  const history = useHistory();
  const getHitProducts = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}prod/products?isSpecial=true`,
        headers: {
          "access-control-allow-origin": "*",
          "Content-Type": "application/json",
        },
      });
      setSpecial(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHitProducts();
  }, []);

  const salePageNavigate = () => {
    history.push({
      pathname: `/sale-page`,
      state: {
        param: "isSpecial=true",
      },
    });
  };

  return (
    <div className={classes.Specials}>
      <p>Спецпредложения</p>

      <div className={classes.SpecialsContent}>
        {special.slice(0, 8).map((item) => {
          return (
            <ProductCard
              key={item.productId}
              productCode={item.productCode}
              productId={item.productId}
              productName={item.productName}
              productPictureLink={item.productPictureLink}
              productPrice={item.productPrice}
            />
          );
        })}
      </div>
      <div>
        <span className={classes.Catalog} onClick={salePageNavigate}>
          Смотреть каталог
        </span>
      </div>
    </div>
  );
};

export default Specials;
