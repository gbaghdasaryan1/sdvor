import classes from "./Catalog.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CatalogData from "../../common/menu";
import { useState } from "react";
interface ICatalog {
  show: boolean;
}

interface INestState {
  name: string;
  url: string;
  icon?: string;
  children: [];
  level?: number;
}

const Menu = ({ items }: any) => {
  const [displayChildren, setDisplayChildren] = useState<any>({});

  return (
    <ul className={classes.Menu}>
      {items.map((item: INestState, idx: number) => (
        <li
          key={idx}
          onMouseEnter={() => {
            setDisplayChildren({
              ...displayChildren,
              [item.name]: !displayChildren[item.name],
            });
          }}
          onMouseLeave={() =>
            setDisplayChildren({
              ...displayChildren,
              [item.name]: !displayChildren[item.name],
            })
          }
          onMouseUp={() => setDisplayChildren({})}
        >
          {item.name}
          <span>{item.children && ">"}</span>
          {displayChildren[item.name] && item.children && (
            <Menu items={item.children} />
          )}
        </li>
      ))}
    </ul>
  );
};

const Catalog = ({ items }: any) => {
  return (
    <div className={classes.MenuWrapper}>
      <Menu items={CatalogData} />;
    </div>
  );
};

export default Catalog;
