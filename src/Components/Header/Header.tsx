import classes from "./Header.module.css";
import Logo from "../../assets/logo_stroy.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import useWindowSize from "../../hooks/useWindoweSize";
import { useHistory } from "react-router";

const Header = () => {
  let width = useWindowSize();
  const history = useHistory();

  return (
    <header>
      <div className={classes.headerContainer}>
        <div onClick={() => history.push("/")} style={{ cursor: "pointer" }}>
          <img src={Logo} alt='Logo' className={classes.Logo} />
        </div>

        <div>
          <input
            type='text'
            className={classes.searchField}
            placeholder='Поиск'
          />
          <button className={classes.searchButton}>
            {width < 1100 ? "" : "Hайти"}
            &nbsp;
            <i className='fas fa-search'></i>
          </button>
        </div>
        <div>
          <button>
            {/* <PermIdentityOutlinedIcon
              fontSize={width < 700 ? "medium" : "small"}
            /> */}
            {/* {width < 1100 ? "" : "Вход или регистрация"} */}
          </button>
          &nbsp; &nbsp; &nbsp;
          <button onClick={() => history.push("/basket")}>
            <ShoppingCartOutlinedIcon
              fontSize={width < 1100 ? "medium" : "small"}
            />
            {width < 1100 ? "" : "Корзина"}
            {/* Корзина */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
