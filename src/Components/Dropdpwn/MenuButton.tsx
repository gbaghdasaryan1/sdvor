import "./Dropdown.css";

const MenuButton = ({ menuItem, onClick, isCloseButton }: any) => {
  return (
    <button className='menu-button' onClick={onClick}>
      <span
        className='menu-button-icon'
        style={{
          background: isCloseButton && "transparent",
          fontSize: isCloseButton && "1.5rem",
        }}
      >
        {menuItem.icon}
      </span>
      <span className='menu-button-text'>{menuItem.name}</span>
      {menuItem.children && !isCloseButton && <span>Het</span>}
    </button>
  );
};

export default MenuButton;
