import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useHistory } from "react-router";
import { useDetectClickOutside } from "react-detect-click-outside";

const RenderChildren = (items: any[], closeToggle: any) => {
  const history = useHistory();

  const onCategoryClick = (id: number) => {
    history.push(`/categories/${id}`);
    closeToggle();
  };
  return (
    <Accordion>
      {items?.map((c) => (
        <>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} key={c.id}>
            <Typography onClick={() => onCategoryClick(c.id)}>
              {c?.name}
            </Typography>
          </AccordionSummary>
        </>
      ))}
    </Accordion>
  );
};

const renderNode = (node: any, closeToggle: any) => {
  return (
    <>
      {node.map((item: any) => {
        return (
          <Accordion key={item.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{item?.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {RenderChildren(item?.children, closeToggle)}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

const MobileCategoryMenu = ({ closeToggle, categories }: any) => {
  const ref: any = useDetectClickOutside({ onTriggered: closeToggle });

  if (categories === []) {
    alert();
  }

  return (
    <Grid
      ref={ref}
      container
      width={"100%"}
      spacing={1}
      sx={{ position: "absolute", top: "180px", bottom: "0", zIndex: 555 }}
    >
      <Grid item xs={12} sm={3}>
        {renderNode(categories, closeToggle)}
      </Grid>
    </Grid>
  );
};

export default MobileCategoryMenu;
