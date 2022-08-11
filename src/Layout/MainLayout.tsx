import React from "react";
import classes from  "./MainLayout.module.css";

const MainLayout = (props: any) => {


    return(
        <div className={classes.MainLayout}>
            {props.children}
        </div>
    )
};

export default MainLayout;