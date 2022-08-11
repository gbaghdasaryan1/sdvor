import React from 'react';
import classes from './SimilarProducts.module.css';
import SimilarProductsItem from './SimilarProductsItem/SimilarProductsItem';


const SimilarProducts = () => {
    return (
        <div className={classes.SimilarProducts}>
            <h2>Похожие товары</h2>

            <div className={classes.SimilarProductsItems}>


                <SimilarProductsItem />
                <SimilarProductsItem />
                <SimilarProductsItem />
                <SimilarProductsItem />
                <SimilarProductsItem />
            </div>
        </div>
    )
};
export default SimilarProducts;