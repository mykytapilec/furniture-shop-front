import React from "react";
import {CatalogItem} from "../../interfaces/interfaces";

import "./colectionItemCard.css";


const CollectionItemCard = ({title, description, price, url} : CatalogItem) =>{
    return(
        <div className='collection_item_container'>
            <div className="image_container_for_collection_items">
                <img alt={title} src={url}/>
            </div>
            <div className="container_for_collection_item_data">
                <div className="bor">
                    <h3>{title}</h3>
                </div>
                <div className="bor">
                    <h6>{description}</h6>
                </div>
                <div className="container_for_price">
                    <div className="bor">{price}</div>
                    <div className="bor">bnm,</div>
                </div>
            </div>
        </div>
    )
}


export default CollectionItemCard;