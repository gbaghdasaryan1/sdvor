import { useState } from "react";
import BuyDialog from "../Dialog";
import classes from "./Footer.module.css";

const Footer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onAddReview = () => {
    setIsOpen(true);
  };
  return (
    <div className={classes.Footer}>
      <BuyDialog
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(false)}
        review={true}
        productId={null}
      />
      <div className={classes.FooterContent}>
        <div>
          <ul>
            <p>Компания</p>
            <div>
              <a href='/' rel='noreferrer noopener'>
                О компании
              </a>
            </div>
            <div>
              <a href='/' rel='noreferrer noopener'>
                Контакты
              </a>
            </div>
            <div>
              <a href='/' rel='noreferrer noopener'>
                Магазины
              </a>
            </div>
            <div>
              <a href='/' rel='noreferrer noopener'>
                Вакансии
              </a>
            </div>
          </ul>
        </div>
        <div>
          <ul>
            <p>Услуги</p>
            <div>
              <a href='/' rel='noreferrer noopener'>
                О компании
              </a>
            </div>
            <div>
              <a href='/' rel='noreferrer noopener'>
                Доставка и разгрузка
              </a>
            </div>
            <div>
              <a href='/' rel='noreferrer noopener'>
                Строительные бригады
              </a>
            </div>
            <div>
              <a href='/' rel='noreferrer noopener'>
                Продажа квартир
              </a>
            </div>
          </ul>
        </div>
        <div>
          <ul>
            <p>Услуги</p>
            <div>
              <a href='/' rel='noreferrer noopener'>
                Оплата заказа
              </a>
            </div>
            <div>
              <a href='/' rel='noreferrer noopener'>
                Обмен и возврат
              </a>
            </div>
            <div>
              <a href='/' rel='noreferrer noopener'>
                Статьи
              </a>
            </div>
            <div>
              <a href='/' rel='noreferrer noopener'>
                О защите потребителей
              </a>
            </div>
            <div>
              <a href='/' rel='noreferrer noopener'>
                Условия продажи товаров
              </a>
            </div>
          </ul>
        </div>
        <div>
          <ul>
            <p style={{ opacity: "0" }}>asad</p>
            <div>
              <input
                type='text'
                placeholder='будьте в курсе последних новостей и акций'
              />
            </div>
            <div>
              <button onClick={onAddReview}>Оставить заявку</button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
