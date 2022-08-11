import MainLayout from "../../Layout/MainLayout";
import "./ShipingAndPay.css";

import Tabel from "./Screenshot_2.png";

const ShipingAndPay = () => {
  return (
    <MainLayout>
      <div className='ShipingAndPay'>
        <h2>Доставка по Ленинскому району</h2>
        <img src={Tabel} alt='Price' />

        <p>
          <strong>Зона 1 - </strong>
          Пригород Лесное, Молоково, Ново Молоково, Мисайлово, Солнечный остров,
          Григорчиково, Большое Соврасово, Андреевское, Богданиха, Володарского,
          Константиново, Европейский Квартал, Редькино, Еганово, Чулково,
        </p>
        <p>
          <strong>Зона 2 - </strong>
          Видное, Домодедово, метро Домодедовская, Развилка, Совхоз им Ленина,
          Расторгуево, Горки Ленинское, Ям
        </p>
        <p>
          <strong>Зона 3 - </strong>
          Бутово, Подольск, Раменск, Жуковск, Лыткарино
        </p>
        <p>
          <strong>Зона 4 - </strong>
          Москва
        </p>
      </div>

      <ul className='ShipingUl'>
        <h2>Разгрузка и подъем</h2>
        <li>
          Услуга "Разгрузка и подъем" предоставляется только при оформлении
          услуги "Доставка".
        </li>
        <li>
          Минимальная стоимость оказания услуги "Разгрузка и подъем" составляет
          1000 руб.
        </li>
      </ul>

      <div className='table'>
        <div></div>
        <div>Разгрузка*</div>
        <div>Подъем без лифта (рублей за этаж)</div>
        <div>До 5000 кг</div>
        <div>1,5 руб/кг</div>
        <div>1,5 руб./кг</div>
        <div>Свыше 5000 кг</div>
        <div>Персональная</div>
        <div>Персональная</div>
      </div>
    </MainLayout>
  );
};

export default ShipingAndPay;
