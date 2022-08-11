import React from 'react';
import classes from './CategorySlider.module.css';
import './Slick.css';
import Slider from "react-slick";
import Img from '../../../assets/image.png'

const CategorySlider = () => {

    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={classes.CategorySlider}>
            <p>Категории</p>
            <Slider {...settings}>
                <div>
                    <div className={classes.SlideItem}>
                        <p>Строительные материалы</p>
                        <img src={Img} alt="" />
                    </div>
                </div>
                <div>
                    <div className={classes.SlideItem}>
                        <p>Пиломатериалы</p>
                        <img src={Img} alt="" />
                    </div>
                </div>
                <div>
                    <div className={classes.SlideItem}>
                        <p>Металл</p>
                        <img src={Img} alt="" />
                    </div>
                </div>
                <div>
                    <div className={classes.SlideItem}>
                        <p>Инструменты и расходники</p>
                        <img src={Img} alt="" />
                    </div>
                </div>
                <div>
                    <div className={classes.SlideItem}>
                        <p>Строительные материалы 5</p>
                        <img src={Img} alt="" />
                    </div>
                </div>
                <div>
                    <div className={classes.SlideItem}>
                        <p>Строительные материалы 6</p>
                        <img src={Img} alt="" />
                    </div>
                </div>
                <div>
                    <div className={classes.SlideItem}>
                        <p>Строительные материалы 7</p>
                        <img src={Img} alt="" />
                    </div>
                </div>
                <div>
                    <div className={classes.SlideItem}>
                        <p>Строительные материалы 8</p>
                        <img src={Img} alt="" />
                    </div>
                </div>
            </Slider>
        </div>
    )
};


export default CategorySlider;