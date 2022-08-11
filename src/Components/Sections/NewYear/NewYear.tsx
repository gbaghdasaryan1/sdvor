import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IProduct } from "../../../common/interfaces";
import ProductCard from "../../ProductCard/ProductCard";
import classes from "./NewYear.module.css";

const NewYear = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const history = useHistory();
  useEffect(() => {
    getHitProducts();
  }, []);

  const getHitProducts = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}prod/products`,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      setData(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const salePageNavigate = () => {
    history.push({
      pathname: `/sale-page`,
      state: {
        param: "",
      },
    });
  };
  return (
    <div className={classes.NewYear}>
      <p>Готовимся к Новому году</p>

      <div className={classes.NewYearContent}>
        {data.slice(0, 8).map((item) => {
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
        {/* <ProductCard /> */}
      </div>
      <div>
        <span className={classes.Catalog} onClick={salePageNavigate}>
          Смотреть каталог
        </span>
      </div>
    </div>
  );
};

export default NewYear;
