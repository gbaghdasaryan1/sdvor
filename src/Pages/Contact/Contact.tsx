// Contact
import MainLayout from "../../Layout/MainLayout";
import "./Contacts.css";
import Phone from "./phone.png";
import whatsapp from "./whatsapp_1.png";
import Email from "./email.png";
import Location from "./location.png";
import Yarmrka from "./yarmrka_1.jpg";
import Map from "./Screenshot_1.png";

const Contact = () => {
  return (
    <MainLayout>
      <div className='Contacts'>
        <h2>Бренды</h2>

        <div className='Contacts'>
          <div className='Contacts-header'>
            <div>
              <img src={Phone} alt='Phone' />
              &nbsp;
              <div>
                <span>Телефон:</span>
                <p>
                  +7 (916) 164 41 33{" "}
                  <img src={whatsapp} alt='whatsapp' className='whatsapp' />{" "}
                  Менеджер по продажам
                </p>
              </div>
            </div>
            <div>
              <img src={Location} alt='Location' />
              &nbsp;
              <div>
                <span>Адрес:</span>
                <p>ул Революционная 63, село Молоково, Ленинский р-н , МО</p>
              </div>
            </div>
            <div>
              <img src={Email} alt='Email' />
              &nbsp;
              <div>
                <span>E-mail:</span>
                <p>stroy-dwor@mail.ru</p>
              </div>
            </div>
          </div>

          <div className='Contacts-content'>
            <h3>
              <span>Заказы доставляем по всему Ленинскому району.</span>
              Качественно! Вовремя! По самым низким ценам!
            </h3>

            <div>
              <img src={Yarmrka} alt='Yarmrka' />
              <img src={Map} alt='Yarmrka' />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
