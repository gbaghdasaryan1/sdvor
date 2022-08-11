import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { IProduct } from "../../../common/interfaces";
import ProductCard from "../../ProductCard/ProductCard";
import classes from "./HitsAndNews.module.css";

const HitsAndNews = () => {
  const history = useHistory();
  const [hits, setHits] = useState<IProduct[]>([]);
  useEffect(() => {
    getHitProducts();
  }, []);

  const getHitProducts = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}prod/products?isHit=true`,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      setHits(res?.data?.data);
    } catch (error) {}
  };

  const salePageNavigate = () => {
    history.push({
      pathname: `/sale-page`,
      state: {
        param: "isHit=true",
      },
    });
  };
  return (
    <div className={classes.HitsAndNews}>
      <p>Хиты и новинки</p>
      <ul>
        <li>Фильтры &nbsp;</li>
        <li>Отопительное оборудование &nbsp;</li>
        <li>Садовый инструмент &nbsp;</li>
        <li>Ванны &nbsp;</li>
      </ul>

      <div className={classes.HitsAndNewsContent}>
        {hits.slice(0, 8).map((item) => {
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

export default HitsAndNews;
