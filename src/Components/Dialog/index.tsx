import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import { IProduct } from "../../common/interfaces";
import { useState } from "react";
import axios from "axios";

interface IProduct {
  productId: number;
  productName: string;
  productPictureLink: string;
  productPrice: number;
  productCode: string;
}

interface IDialogProps {
  isOpen: boolean;
  setIsOpen: () => void;
  productId?: number | null;
  products?: IProduct[] | null;
  quantity?: number;
  review?: boolean;
}

export default function BuyDialog({
  isOpen,
  setIsOpen,
  productId,
  products,
  quantity = 1,
  review = false,
}: IDialogProps) {
  const [order, setOrder] = useState({
    name: "",
    phone: "",
  });

  const buyProduct = async () => {
    const data = {
      name: order.name,
      phone: order.phone,
      productId,
      basketProduct: products,
      quantity,
    };

    try {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_BASE_URL}`,
        data,
      });

      close();
    } catch (error) {
      console.log(error);
    }
  };

  const close = () => {
    setIsOpen();
    setOrder({
      name: "",
      phone: "",
    });
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Пожалуйста, заполните ваши данные․
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Name'
            type='text'
            fullWidth
            variant='standard'
            color='success'
            value={order.name}
            onChange={(e) =>
              setOrder((prev) => {
                return {
                  ...prev,
                  name: e.target.value,
                };
              })
            }
          />
          <TextField
            autoFocus
            margin='dense'
            id='phone'
            label='Phone Number'
            type='text'
            fullWidth
            variant='standard'
            color='success'
            value={order.phone}
            onChange={(e) => {
              setOrder((prev: any) => {
                return {
                  ...prev,
                  phone: e.target.value,
                };
              });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color='inherit'>
            Отмена
          </Button>
          {review ? (
            <Button onClick={buyProduct} variant='contained' color='success'>
              Отправить
            </Button>
          ) : (
            <Button onClick={buyProduct} variant='contained' color='success'>
              Купить
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
