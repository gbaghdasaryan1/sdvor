import React from 'react';
import classes from './SimilarProductsItem.module.css';
import SimilarImg from '../../../assets/similar.png';

const SimilarProductsItem = () => {

    return (
        <div className={classes.SimilarProductsItem}>
            <img src={SimilarImg} alt="Product" />

            <span>Арт. 82684775</span>
            <p>Пакет № 47 Protherm (Котел электрический Скат/Ray 9 КE/ 14, Бойлер FE 120/6 BM)</p>
            <span>Цена по запросу</span>
        </div>
    )
};
export default SimilarProductsItem;