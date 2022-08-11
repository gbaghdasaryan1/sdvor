import classes from "./Catalog2.module.scss";
import { useDetectClickOutside } from "react-detect-click-outside";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Fragment } from "react";
import { useHistory } from "react-router-dom";

const Catalog = ({ closeToggle, categories }: any) => {
  const ref: any = useDetectClickOutside({ onTriggered: closeToggle });

  const history = useHistory();

  const onCategoryClick = (id: number) => {
    history.push(`/categories/${id}`);
  };

  return (
    <div className={classes.wrap} ref={ref}>
      <ul id='menu'></ul>
      <div className={classes.menuContainer}>
        <ul className={classes.ul}>
          {categories?.map((item: any) => {
            return (
              <>
                <li key={item.id} onClick={() => onCategoryClick(item.id)}>
                  {item.name}
                  {item?.children && (
                    <KeyboardArrowRightIcon fontSize='small' />
                  )}

                  <ul className={classes.ul}>
                    {item.children &&
                      item?.children.map((i: any) => {
                        return (
                          <Fragment key={i.id}>
                            <li
                              key={i.id}
                              onClick={() => onCategoryClick(i.id)}
                            >
                              {i.name}
                              {i.children && (
                                <KeyboardArrowRightIcon fontSize='small' />
                              )}

                              <ul className={classes.ul}>
                                {i.children &&
                                  i.children.map((n: any) => {
                                    return (
                                      <li
                                        key={n.id}
                                        onClick={() => onCategoryClick(n.id)}
                                      >
                                        {n.name}
                                        {n.children && (
                                          <KeyboardArrowRightIcon fontSize='small' />
                                        )}

                                        <ul className={classes.ul}>
                                          {n?.children &&
                                            n.children.map((n2: any) => {
                                              return (
                                                <li
                                                  key={n2.id}
                                                  onClick={() =>
                                                    onCategoryClick(n2.id)
                                                  }
                                                >
                                                  {n2.name}{" "}
                                                  {n2.children && (
                                                    <KeyboardArrowRightIcon fontSize='small' />
                                                  )}
                                                </li>
                                              );
                                            })}
                                        </ul>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </li>
                          </Fragment>
                        );
                      })}
                  </ul>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
