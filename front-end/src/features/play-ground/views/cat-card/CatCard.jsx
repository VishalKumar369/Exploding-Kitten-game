import React from 'react';
import './CatCard.css'
import KittenCardImage from '../../../../assets/images/kitten-transparent.jpg'
import { getImages } from '../../../../assets/getImages';

const CatCard = (props) => {
    const { displayed, cardType } = props;
    return (
        <>
            {
                displayed ?
                <div className="visible-cat" >
                {/* style={{backgroundColor:`${getImages(cardType).color}`}} */}
                    <img src={getImages(cardType).image} alt="" />
                    <div className="show-kitten-type">{cardType}</div>
                </div>
                    :
                    <div className="cat-card">
                        <img src={KittenCardImage} alt="" />
                    </div>
            }
        </>
    )
}

export default CatCard;