import { useEffect, useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import classes from "./ProductDetail.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CurrencyRubleOutlinedIcon from "@mui/icons-material/CurrencyRubleOutlined";
import BuyDialog from "../../Components/Dialog";
import axios from "axios";
import { IProduct } from "../../common/interfaces";
import { useParams } from "react-router";

const ProductDetail = () => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState("1");
  const param: any = useParams();

  const [product, setProduct] = useState<IProduct>({
    productId: 0,
    categoryId: 0,
    isHit: false,
    isSpecial: false,
    productName: "",
    productBrand: "",
    productRate: 0,
    productPrice: 0,
    productCode: "",
    productShortDescription: "",
    productDescription: "",
    productPictureLink: "",
  });

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}prod/products/${param.id}`,
      });
      setProduct(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>
      <BuyDialog
        quantity={Number(quantity)}
        isOpen={open}
        setIsOpen={() => setOpen(false)}
        productId={product.productId}
      />
      <div className={classes.ProductDetail}>
        <section>
          <div className={classes.ProductImage}>
            <img src={product.productPictureLink} alt='' />
            <i className='far fa-heart'></i>
          </div>
          <div className={classes.Details}>
            <div>
              <p>{product.productName}</p>

              <div className={classes.Code}>
                <p>
                  Код &nbsp; {product.productCode} &nbsp;&nbsp;{" "}
                  <span>Бренд:</span> &nbsp;
                  {product.productBrand}
                </p>
              </div>

              <div className={classes.BuyBlock}>
                <button onClick={() => setOpen(true)}>
                  <ShoppingCartOutlinedIcon />
                  купить
                </button>
                <input
                  type='number'
                  defaultValue={1}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <span className={classes.Price}>
                {product.productPrice} <CurrencyRubleOutlinedIcon />
              </span>

              <div className={classes.Hr}></div>

              <span className={classes.Description}>
                {product.productShortDescription}
              </span>
            </div>
          </div>
        </section>

        <div className={classes.Reviews}>
          <div>
            <button className={classes.RevBtn}>Описание</button>
            <button className={classes.RevBtnDisable}>
              Отзывы покупателей
            </button>
          </div>

          <p>{product.productDescription}</p>

          {/* <span>Купить штукатурку в Ленинском районе.</span> */}
        </div>
      </div>
      {/* <SimilarProducts /> */}
    </MainLayout>
  );
};

export default ProductDetail;
