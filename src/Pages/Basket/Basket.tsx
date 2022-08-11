import { useEffect, useState } from "react";
import BuyDialog from "../../Components/Dialog";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useAppSelector } from "../../hooks/redux";
import MainLayout from "../../Layout/MainLayout";
import classes from "./Basket.module.css";

const Basket = () => {
  const [totalPrice, setTotalPrice] = useState<Number>(0);
  const [open, setOpen] = useState(false);
  const { items } = useAppSelector((state) => state.basket);

  useEffect(() => {
    getProducts();
  }, [items]);

  const getProducts = async () => {
    let t = 0;
    items?.forEach((item: any) => {
      t += item.productPrice;
      return t;
    });
    setTotalPrice(t);
  };

  return (
    <MainLayout>
      <BuyDialog
        isOpen={open}
        setIsOpen={() => setOpen(false)}
        productId={null}
        products={items}
      />
      <div className={classes.Basket}>
        <h1>
          Корзина <span>{totalPrice} RUB</span>{" "}
          <button onClick={() => setOpen(true)}>Купить все</button>
        </h1>

        <div className={classes.BasketProducts}>
          {items.map((item) => {
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
      </div>
    </MainLayout>
  );
};

export default Basket;
