import React, { useState } from "react";
import classes from "./Topbar.module.css";
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Topbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={classes.topbar}>
      <div className={classes.topbarContainer}>
        <div className={classes.countries}>
          <button onClick={() => setToggle(!toggle)}>
            <i className='fas fa-map-marker-alt'></i>
            Armenia
            <i className='fas fa-chevron-down'></i>
          </button>
          {toggle && (
            <div className={classes.countriesDropdown}>
              <p>Armenia</p>
              <p>Russia</p>
              <p>English</p>
            </div>
          )}
        </div>

        <div className={classes.icons}>
          <a href='tel:+7 925 203 45 28 '>
            <i className='fas fa-phone-alt'></i>
          </a>
          <a href='mailto:stroy-dwor@mail.ru' rel='noreferrer'>
            <i className='far fa-envelope'></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
