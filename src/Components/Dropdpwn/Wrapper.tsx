import { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Dropdown.css";
import CatalogData from "../../common/menu";

const aa = [
  { id: 39, title: "Կոշիկ", href: "", menuComponent: "noChild" },
  { id: 36, title: "TV SHOP", href: "", menuComponent: "noChild" },
];

const menu = [
  { title: "Կոշիկ", id: "39", icon: "" },
  {
    title: "TV SHOP",
    icon: "",
    id: "36",
    menu: [{ title: "Tv Shop", icon: "", id: "36" }],
  },
];

const MenuButton = ({ menuItem, onClick, isCloseButton }: any) => {
  const history = useHistory();

  return (
    <button
      style={{ color: isCloseButton && "#232385" }}
      className='menu-button'
      onClick={onClick}
    >
      <span
        className='material-icons'
        style={{
          background: isCloseButton && "white",
          fontSize: isCloseButton && "1.5rem",
        }}
      >
        {menuItem.icon}
      </span>

      {menuItem.hasOwnProperty("menu") ? (
        <span className='menu-button-text'>{menuItem.name} </span>
      ) : (
        <span
          className='menu-button-text'
          onClick={() => {
            history.push({
              pathname: `/category/${menuItem.id}`,
              state: { name: menuItem.name },
            });
          }}
        >
          {menuItem.name}
        </span>
      )}

      {menuItem.children && !isCloseButton && (
        <span className='material-icons'>chevron_right</span>
      )}
    </button>
  );
};

const Menu = ({ menuHeight, isOpen, activeMenu, toggleMenuOpen }: any) => {
  return (
    <div className='wrapper' style={{ height: `${menuHeight}px` }}>
      <div className={`menu-main ${isOpen ? "open" : ""}`} id='mainmenu'>
        {CatalogData.map((menuItem: any, idx: number) => (
          <div key={idx}>
            <MenuButton
              // key={idx}
              menuItem={menuItem}
              onClick={() => toggleMenuOpen(menuItem)}
            />
            {menuItem.children && activeMenu === menuItem.name && (
              <div className='menu-sub' id='submenu'>
                <>
                  <MenuButton
                    isCloseButton
                    menuItem={{
                      ...menuItem,
                      icon: "arrow_back",
                    }}
                    onClick={() => toggleMenuOpen(menuItem)}
                  />
                  {menuItem.children.map((subMenuItem: any, index: number) => (
                    <MenuButton
                      menuItem={subMenuItem}
                      key={index}
                      onClick={() => toggleMenuOpen(subMenuItem)}
                    />
                  ))}
                </>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

interface IWrapperProps {
  show: boolean;
}

const Wrapper = ({ show }: IWrapperProps) => {
  const [isOpen, setIsOpen]: any = useState();
  const [menuHeight, setMenuHeight] = useState();
  const [activeMenu, setActiveMenu] = useState();
  const [hide, setHide] = useState(true);
  const history = useHistory();

  const toggleMenuOpen = ({ children, name, id }: any) => {
    if (!children && !children?.hasOwnProperty("children")) {
      //   setHide(false);
      return;
    }
    setActiveMenu(name);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const menuElement = document.getElementById(
      isOpen ? "submenu" : "mainmenu"
    );
    setMenuHeight(menuElement?.clientHeight as any);
  }, [isOpen]);

  return (
    <div style={{ display: hide ? "" : "none" }}>
      <Menu
        menuHeight={menuHeight}
        isOpen={isOpen}
        activeMenu={activeMenu}
        toggleMenuOpen={toggleMenuOpen}
      />
    </div>
  );
};
export default Wrapper;
