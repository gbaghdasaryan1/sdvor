import { useEffect, useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import useWindowSize from "../../hooks/useWindoweSize";
import Catalog2 from "../Catalog/Catalog2";
import { useHistory } from "react-router";
import MobileCategoryMenu from "../MobileCategoryMenu/MobileCategoryMenu";
import axios from "axios";

const Navbar = () => {
  const width = useWindowSize();
  const [toggleDrop, setToggleDrop] = useState(false);
  const [showCatalog, setShowCatalog]: any = useState(false);
  const history = useHistory();
  const [categories, setCategories] = useState<any[]>([]);

  const onOpenDrop = (e: any) => {
    setToggleDrop(!toggleDrop);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const res = await axios({
        url: `${process.env.REACT_APP_BASE_URL}prod/categories`,
        method: "get",
      });

      setCategories(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("click", (event: any) => {
      if (event.target.id === "ASD") {
        setShowCatalog(false);
      }
    });
  }, []);
  const closeToggle = () => {
    setShowCatalog(false);
  };
  return (
    <nav>
      <div onClick={() => setShowCatalog(!showCatalog)} id='ASD'>
        <button className='Catalog' title='Catalog'>
          <MenuIcon />
          &nbsp;
          {width < 700 ? "" : "Каталог"}
        </button>
      </div>
      <div>
        <ul>
          <li onClick={(e: any) => onOpenDrop(e)} id='li'>
            <button onClick={() => history.push("/shiping-pay")}>
              Доставка и оплата
            </button>
          </li>
          <li>
            <button onClick={() => history.push("/brends")}>
              Бренды &nbsp;
            </button>
          </li>
          <li>
            <button onClick={() => history.push("/about-us")}>
              О компании &nbsp;
            </button>
          </li>
          <li>
            {/* contacts */}
            <button onClick={() => history.push("/contacts")}>
              Контакты &nbsp;
            </button>
          </li>
          <li>
            <button>Статьи &nbsp;</button>
          </li>
        </ul>
      </div>
      <div></div>

      {showCatalog && width > 800 ? (
        <Catalog2 closeToggle={closeToggle} categories={categories} />
      ) : (
        ""
      )}
      {showCatalog && width < 800 ? (
        <MobileCategoryMenu closeToggle={closeToggle} categories={categories} />
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
