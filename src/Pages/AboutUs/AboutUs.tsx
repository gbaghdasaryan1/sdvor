import React from 'react';
import MainLayout from '../../Layout/MainLayout';
import classes from './AboutUs.module.css';
import AboutUsImg from '../../assets/aboutus.png';
import Check from '../../assets/Vector.png';



const AboutUs = () => {


    return (
        <MainLayout >

            <div className={classes.AboutUs}>
                <h1>О компании</h1>
                <img src={AboutUsImg} alt="SDvor" width="100%" />
                <h2>Самые низкие цены на рынке </h2>

                <div>
                    <img src={Check} alt="" />
                    <span>Свой склад</span>
                </div>
                <div>
                    <img src={Check} alt="" />
                    <span>Свой автопарк</span>
                </div>
                <div>
                    <img src={Check} alt="" />
                    <span>Мы официальные диллеры ведущих производителей</span>
                </div>

                <p>Компания «Стройдвор» предоставляет потребителям огромный ассортимент товаров и услуг.
                    Все, что необходимо для строительства, вы найдете именно у нас!</p>

                <p> Стройматериалы, электрика, сантехника, крепеж, краски, дерево, металл, инструменты и расходники,
                    а также спецодежда - все для осуществления ваших задумок и планов.</p>

                <p>Вам будет предоставлен качественный сервис и гибкая система скидок, особенно если вы станете нашим постоянным покупателем.
                    Вас всегда ждет консультация, где вы ознакомитесь с широким выбором самых оптимальных решений</p>
                <p>В кратчайшие сроки товар будет вам доставлен, это не заставит долго ждать и отвлекать
                    от ваших повседневных дел и работы. Время тратится разумно и целесообразно.</p>
                <p> На сайте компании «Стройдвор» вы можете ознакомиться со стоимостью услуг, а также найти подходящий именно вам товар. Вашему вниманию также представлен полный
                    каталог брендов. Он дает вам возможность самостоятельно изучить товар и определиться с выбором.</p>
                <p>Девиз компании выбран неслучайно: «Качественно! Вовремя!». Две основные составляющие и определяют сервис компании.
                    Надежность и высокое качество товара обеспечат благонадежные отношения с любым потребителем.</p>
                <p>Мы заботимся о вашем спокойствии
                    и внутренней гармонии, а вам не нужно заботиться ни о чем! Ваши заботы мы берем на себя!</p>

            </div>
        </MainLayout >
    )
};

export default AboutUs;