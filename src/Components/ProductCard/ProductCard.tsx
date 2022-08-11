import { useState } from "react";
import classes from "./ProductCard.module.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useHistory, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import BuyDialog from "../Dialog";
import { useActions } from "../../hooks/redux";

interface IProductCardProps {
  productName: string;
  productCode: string;
  productPictureLink: string;
  productId: number;
  productPrice: number;
}

const ProductCard = ({
  productName,
  productCode,
  productPictureLink,
  productId,
  productPrice,
}: IProductCardProps) => {
  const history = useHistory();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { addBasketItem, removeBasketItem } = useActions();

  const addBasket = () => {
    addBasketItem({
      productCode,
      productId,
      productName,
      productPictureLink,
      productPrice,
    });
  };

  const onRemoveItem = () => {
    removeBasketItem({
      productCode,
      productId,
      productName,
      productPictureLink,
      productPrice,
    });
  };

  return (
    <div className={classes.ProductCard}>
      <BuyDialog
        isOpen={open}
        setIsOpen={() => setOpen(false)}
        productId={productId}
      />
      {location.pathname.includes("basket") && (
        <button className={classes.Remove} onClick={onRemoveItem}>
          <CloseIcon fontSize='small' color='success' />
        </button>
      )}
      <img
        src={productPictureLink}
        width='100%'
        style={{ cursor: "pointer" }}
        alt='IMG'
        onClick={() => history.push(`/product/${productId}`)}
      />
      <span>Арт. {productCode}</span>
      <p>
        {productName} - {productId}
      </p>
      <span>Цена по запросу</span>
      <button className={classes.KnowPrice} onClick={() => setOpen(true)}>
        <LocalPhoneOutlinedIcon fontSize='small' />
        &nbsp; Узнать цену
      </button>

      {location.pathname.includes("basket") ? (
        <button className={classes.Buy} onClick={() => setOpen(true)}>
          &nbsp; Купить
        </button>
      ) : (
        <button className={classes.AddToCart} onClick={addBasket}>
          <ShoppingCartOutlinedIcon fontSize='small' />
          &nbsp; В корзину
        </button>
      )}
    </div>
  );
};

export default ProductCard;
