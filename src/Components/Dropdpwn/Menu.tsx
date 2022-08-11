import classes from "./Dropdown.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useEffect } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
const Menu = ({ closeToggle }: any) => {
  const ref: any = useDetectClickOutside({ onTriggered: closeToggle });
  return (
    <div className={classes.wrap} ref={ref}>
      <ul id='menu'></ul>
      <div className={classes.menuContainer}>
        <ul className={classes.ul}>
          <li>
            Стройматериалы
            <KeyboardArrowRightIcon fontSize='small' />
            <ul className={classes.ul}>
              <li>
                Сухие строительные смеси
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Сухие смеси, цемент</li>
                  <li>Штукатурка</li>
                  <li>Шпатлёвка</li>
                  <li>Сухие строительные клея</li>
                </ul>
              </li>
              <li>
                Блоки и кирпичи
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Блоки</li>
                  <li>Блок пазогребневый</li>
                  <li>Кирпич</li>
                  <li>Тротуарная плитка и бордюры</li>
                </ul>
              </li>
              <li>
                Гипсокартон и комплектующие
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Гипсокартон</li>
                  <li>Краб, подвес</li>
                  <li>Маяки, уголки</li>
                  <li>Профили для гипсокартона</li>
                </ul>
              </li>
              <li>
                Гидроизоляция
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Битумная мастика</li>
                  <li>Рулонная гидроизоляция</li>
                </ul>
              </li>
              <li>
                Утеплители для дома
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Геотекстиль</li>
                  <li>Минеральная вата</li>
                  <li>Отражающая изоляция</li>
                  <li>Пакля</li>
                  <li>Паро- ветро- гидроизоляция</li>
                  <li>Пенополистирол</li>
                  <li>Плёнки</li>
                </ul>
              </li>
              <li>Бетонные Кольца</li>
            </ul>
          </li>
          <li>
            Пиломатериалы
            <KeyboardArrowRightIcon fontSize='small' />
            <ul className={classes.ul}>
              <li>Фанера</li>
              <li>OSB плита</li>
              <li>Доска</li>
              <li>Брус</li>
              <li>Вагонка</li>
              <li>Блок хаус</li>
              <li>Плинтус, уголок, наличник</li>
            </ul>
          </li>
          <li>
            Металл
            <KeyboardArrowRightIcon fontSize='small' />
            <ul className={classes.ul}>
              <li>Арматура</li>
              <li>Квадрат</li>
              <li>Круг</li>
              <li>Лист</li>
              <li>Полоса</li>
              <li>Сваи</li>
              <li>Труба</li>
              <li>Профильная труба</li>
              <li>Уголок</li>
              <li>Швеллер</li>
              <li>Проволока вязальная</li>
            </ul>
          </li>
          <li>
            Сетки
            <KeyboardArrowRightIcon fontSize='small' />
            <ul className={classes.ul}>
              <li>Сетка рабица</li>
              <li>Сетка оцинкованная</li>
              <li>Сетка сварная</li>
              <li>Сетка тканая</li>
              <li>Сетка ЦПВС</li>
              <li>Дорожная сетка</li>
            </ul>
          </li>
          <li>
            Краски
            <KeyboardArrowRightIcon fontSize='small' />
            <ul className={classes.ul}>
              <li>
                Краски
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Краски для внутренних работ</li>
                  <li>Краски для наружных работ</li>
                </ul>
              </li>
              <li>Лаки</li>
              <li>
                Эмали
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Эмали ПФ 115</li>
                  <li>Эмали для радиаторов</li>
                  <li>Эмали для полы и лестницы</li>
                  <li>Эмали для дерево НЦ-132</li>
                  <li>Эмали акриловые</li>
                  <li>Эмали по ржавчине 3в1</li>
                  <li>Краска БТ-177</li>
                  <li>Грунт ГФ 021</li>
                </ul>
              </li>
              <li>
                Клеи
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Клей ПВА</li>
                  <li>Клей для обоев</li>
                  <li>Клей КС</li>
                  <li>Жидкое стекло</li>
                  <li>Жидкие гвозди</li>
                </ul>
              </li>
              <li>Грунтовки</li>
              <li>Бетоноконтакт</li>
              <li>Антисептики</li>
              <li>Пропитка</li>
              <li>
                Герметики и пены
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Пены монтажные</li>
                  <li>Жидкие гвозди</li>
                </ul>
              </li>
              <li>Растворители и очистители</li>
              <li>Гидроизоляция</li>
              <li>Добавки к смесям</li>
            </ul>
          </li>
          <li>
            Электрика
            <KeyboardArrowRightIcon fontSize='small' />
            <ul className={classes.ul}>
              <li>
                Автоматы
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>АвтоматыАвтоматы ABB (АББ)</li>
                  <li>Контакторы</li>
                  <li>Кросс модули</li>
                </ul>
              </li>
              <li>
                Электрощиты, счетчики
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Электрощиты(боксы)</li>
                  <li>Счетчики</li>
                </ul>
              </li>
              <li>
                Кабель, Провод, АКБ
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>ВВГнг LS</li>
                  <li>ПВС</li>
                  <li>СИП</li>
                  <li>TV, UTP интернет</li>
                  <li>Кабели</li>
                </ul>
              </li>
              <li>Клемники(Ваго), шины, наконечники</li>
              <li>Гофра, стяжки, термоусадки</li>
              <li>Подрозетники, распай коробки</li>
              <li>Кабельный канал (короб)</li>
              <li>
                Розетки и выключатели
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>
                    Розетки
                    <KeyboardArrowRightIcon fontSize='small' />
                    <ul className={classes.ul}>
                      <li>Розетки Legrand QUTEO</li>
                      <li>Розетки Legrand Valena</li>
                    </ul>
                  </li>
                  <li>
                    Выключатели купить
                    <KeyboardArrowRightIcon fontSize='small' />
                    <ul className={classes.ul}>
                      <li>Выключатели QUTEO</li>
                      <li>Выключатели Legrand Valena</li>
                    </ul>
                  </li>
                  <li>Блоки</li>
                </ul>
              </li>
              <li>
                Бытовые электротовары
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Колодки и Вилки</li>
                  <li>Лампочки и патроны</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Крепеж
            <KeyboardArrowRightIcon fontSize='small' />
            <ul className={classes.ul}>
              <li>
                Анкера
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Анкер болт</li>
                  <li>Анкер болт с гайкой</li>
                  <li>Анкер рамный</li>
                  <li>Анкер болт с крюком</li>
                  <li>Анкер забивной</li>
                  <li>Анкер клин</li>
                </ul>
              </li>
              <li>
                Саморезы
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>По дереву черные</li>
                  <li>По дереву жёлтые</li>
                  <li>По дереву - Глухарь</li>
                  <li>По гипсокартону</li>
                  <li>По металлу с прессшайбой</li>
                  <li>Кровельные</li>
                  <li>По бетону - Нагель</li>
                  <li>Для сэндвич панелей</li>
                </ul>
              </li>
              <li>
                Гвозди
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Гвозди строительные</li>
                  <li>Гвозди оцинкованные</li>
                  <li>Гвозди ершовые</li>
                  <li>Гвозди кровельные</li>
                  <li>Гвозди финишные</li>
                  <li>Дюбели</li>
                  <li>Гвозди винтовые</li>
                </ul>
              </li>
              <li>
                Метрика
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Болты </li>
                  <li>Гайки</li>
                  <li>Шайбы</li>
                  <li>Шпильки</li>
                </ul>
              </li>
              <li>
                Такелаж
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Тросы и зажимы </li>
                  <li>Карабин</li>
                  <li>Цепи и соединители</li>
                  <li>Талреп</li>
                </ul>
              </li>
              <li>
                Перфорация
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Крепежные уголки</li>
                  <li>Опоры крепежные</li>
                  <li>Перфолента</li>
                  <li>Пластина</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Сантехника
            <KeyboardArrowRightIcon fontSize='small' />
            <ul className={classes.ul}>
              <li>
                Канализация
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Внутренная</li>
                  <li>Наружная</li>
                </ul>
              </li>
              <li>Полипропилен</li>
              <li>ПНД</li>
              <li>Кран</li>
              <li>
                Дренаж
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Труба дренажная</li>
                  <li>Колодец</li>
                  <li>Люки</li>
                  <li>Водоотводные лотки</li>
                </ul>
              </li>
              <li>Утеплители для труб</li>
            </ul>
          </li>
          <li>
            Инструменты и расходники
            <KeyboardArrowRightIcon fontSize='small' />
            <ul className={classes.ul}>
              <li>
                Сверла, буры, коронки
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Сверло по металу</li>
                  <li>Сверло по дереву</li>
                  <li>Сверло по плитки</li>
                  <li>Сверло по бетону</li>
                  <li>Бур по бетону</li>
                  <li>Сверло перовое (Перо)</li>
                  <li>Пика, зубило</li>
                  <li>Фреза</li>
                </ul>
              </li>
              <li>
                Скотчи, Перчатки
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Скотчи, ленты</li>
                  <li>Перчатки</li>
                </ul>
              </li>
              <li>
                Диски, круги
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Круги отрезные по металлу</li>
                  <li>Диски алмазные</li>
                  <li>Диски пильные по дереву</li>
                  <li>Круги, чашки шлифовальные</li>
                </ul>
              </li>
              <li>Ведра, тазы</li>
              <li>Шлифовальные бумаги, ленты</li>
              <li>Бита, насадка, патрон для дрели</li>
              <li>Веревки, шнуры, шпагаты</li>
              <li>
                Другие расходники
                <KeyboardArrowRightIcon fontSize='small' />
                <ul className={classes.ul}>
                  <li>Венчик для миксера</li>
                  <li>Крестики для плитки</li>
                  <li>Скобы для степлеров</li>
                  <li>Пилки для лобзика</li>
                  <li>Заклепки</li>
                  <li>Расходники для бензопилы</li>
                  <li>Мешки, маркеры</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Стройматериалы оптом</li>
          <li>Двери</li>
          <li>
            Электроинструмент
            <KeyboardArrowRightIcon fontSize='small' />
            <ul className={classes.ul}>
              <li>Миксеры строительные</li>
              <li>Дрели-шуруповерты</li>
              <li>УШМ</li>
              <li>Перфораторы</li>
              <li>Компрессоры</li>
              <li>Электролобзики</li>
              <li>Электрические тепловые пушки</li>
              <li>Бензопилы</li>
              <li>Снегоуборочная машина</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
