import { useEffect, useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import classes from "./SalePage.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Drawer, Pagination } from "@mui/material";
import useWindowSize from "../../hooks/useWindoweSize";
import { useLocation } from "react-router";
import axios from "axios";
import { IProduct } from "../../common/interfaces";
import usePagination from "../../hooks/pagination";

const SalePage = () => {
  const [sortDropdown, setSortDropdown] = useState(false);
  const [openCategoryFilter, setOpenCategoryFilter] = useState(false);
  const [openBrendFilter, setOpenBrendFilter] = useState(false);
  const [filterDrawer, setFilterDrawer] = useState(false);
  const width = useWindowSize();
  const drawerWidth = 250;
  const type: any = useLocation();
  let [page, setPage] = useState(1);
  const PER_PAGE = 20;
  const [products, setProducts] = useState<IProduct[]>([]);
  const count = Math.ceil(products.length / PER_PAGE);
  const _DATA = usePagination(products, PER_PAGE);

  const handleChange = (e: any, p: any) => {
    setPage(p);
    _DATA.jump(p);
  };

  useEffect(() => {
    getProducts();
  }, [page]);

  const getProducts = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}prod/products?${type.state.param}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      setProducts(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.SalePage}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        open={filterDrawer}
        onClose={() => setFilterDrawer(false)}
      >
        <aside>
          <div>
            <p>мой магазин</p>
            <button>Bыбрать</button>
          </div>

          <div className={classes.FilterByCategoryOpen}>
            <p onClick={() => setOpenCategoryFilter(!openCategoryFilter)}>
              Kатегории <KeyboardArrowDownIcon />{" "}
            </p>
            {openCategoryFilter && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.2s",
                  transform: "revert",
                }}
              >
                <span>Саморезы, дюбели</span>
                <span>Крепеж для деревянных конструкций</span>
                <span>Специальный крепеж</span>
                <span>Мебельный крепеж</span>
              </div>
            )}
          </div>
          <div>
            <p onClick={() => setOpenBrendFilter(!openBrendFilter)}>
              Бренд <KeyboardArrowDownIcon />{" "}
            </p>
            {openBrendFilter && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor=''>
                      <input type='checkbox' />
                      &nbsp; Yoko (66)
                    </label>
                    <label htmlFor=''>
                      <input type='checkbox' />
                      &nbsp; Tech-krep (37)
                    </label>
                    <label htmlFor=''>
                      <input type='checkbox' />
                      &nbsp; Роскреп (26)
                    </label>
                    <label htmlFor=''>
                      <input type='checkbox' />
                      &nbsp; Дигор (5)
                    </label>
                    <label htmlFor=''>
                      <input type='checkbox' />
                      &nbsp; Knauf (2)
                    </label>
                    <label htmlFor=''>
                      <input type='checkbox' />
                      &nbsp; Omax (2)
                    </label>
                  </div>
                }
              </div>
            )}
          </div>
        </aside>
      </Drawer>
      <MainLayout>
        <div>
          <div className={classes.SalePageHeader}>
            <p>Новые ассортименты</p>
            <div>
              <span>Sort by &nbsp;</span>
              <button onClick={() => setSortDropdown(!sortDropdown)}>
                Price low to high
                <KeyboardArrowDownIcon />
              </button>
              {sortDropdown && (
                <div>
                  <p>aaaaaa</p>
                  <p>aaaaaa</p>
                  <p>aaaaaa</p>
                  <p>aaaaaa</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <button
          className={classes.MobileFilterBtn}
          onClick={() => setFilterDrawer(!filterDrawer)}
        >
          Filtering
        </button>

        <div className={classes.Content}>
          {width > 1165 && (
            <aside>
              <div>
                <p>мой магазин</p>
                <button>Bыбрать</button>
              </div>

              <div className={classes.FilterByCategoryOpen}>
                <p onClick={() => setOpenCategoryFilter(!openCategoryFilter)}>
                  Kатегории <KeyboardArrowDownIcon />{" "}
                </p>
                {openCategoryFilter && (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>Саморезы, дюбели</span>
                    <span>Крепеж для деревянных конструкций</span>
                    <span>Специальный крепеж</span>
                    <span>Мебельный крепеж</span>
                  </div>
                )}
              </div>
              <div>
                <p onClick={() => setOpenBrendFilter(!openBrendFilter)}>
                  Бренд <KeyboardArrowDownIcon />{" "}
                </p>
                {openBrendFilter && (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label htmlFor=''>
                          <input type='checkbox' />
                          &nbsp; Yoko (66)
                        </label>
                        <label htmlFor=''>
                          <input type='checkbox' />
                          &nbsp; Tech-krep (37)
                        </label>
                        <label htmlFor=''>
                          <input type='checkbox' />
                          &nbsp; Роскреп (26)
                        </label>
                        <label htmlFor=''>
                          <input type='checkbox' />
                          &nbsp; Дигор (5)
                        </label>
                        <label htmlFor=''>
                          <input type='checkbox' />
                          &nbsp; Knauf (2)
                        </label>
                        <label htmlFor=''>
                          <input type='checkbox' />
                          &nbsp; Omax (2)
                        </label>
                      </div>
                    }
                  </div>
                )}
              </div>
            </aside>
          )}
          <main>
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

            <div className={classes.Pagination}>
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
            </div>
          </main>
        </div>
      </MainLayout>
    </div>
  );
};

export default SalePage;
