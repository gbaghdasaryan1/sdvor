import { Pagination } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../common/interfaces";
import ProductCard from "../../Components/ProductCard/ProductCard";
import usePagination from "../../hooks/pagination";
import MainLayout from "../../Layout/MainLayout";
import classes from "./Category.module.css";

const Category = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const param: Record<string, string> = useParams();
  let [page, setPage] = useState(1);
  const PER_PAGE = 20;
  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA: any = usePagination(data, PER_PAGE);
  console.log(param.id);

  useEffect(() => {
    getHitProducts();
  }, []);

  const getHitProducts = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}prod/products?category=${param?.id}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      setData(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e: any, p: any) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <MainLayout>
      <div className={classes.Category}>
        <div className={classes.CategoryContent}>
          {_DATA.currentData().map((item: any) => {
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
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        count={count}
        size='large'
        page={page}
        variant='outlined'
        shape='rounded'
        onChange={handleChange}
      />
    </MainLayout>
  );
};

export default Category;
