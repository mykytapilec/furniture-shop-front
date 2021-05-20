import React from "react";
import {CatalogItem} from "../../interfaces/interfaces";

import "./colectionItemCard.css";
import {useSelector} from "react-redux";


const CollectionItemCard = ({title, description, price, url} : CatalogItem) =>{
    const isAuthenticated = useSelector((state: Store) => state.loginReducer.isEnter);
    return(
        <div className='collection_item_container'>
            <div className="image_container_for_collection_items">
                <img alt={title} src={url}/>
            </div>
            <div className="container_for_collection_item_data">
                <div className="option">
                    <h3>{title}</h3>
                </div>
                <div className="text">
                    <h6>{description}</h6>
                </div>
                <div className="container_for_price">
                    <div className="option">
                        <h4>Price: {price}$</h4>
                    </div>
                    <div className="option">
                        {
                            isAuthenticated ? <h6 className="option">You need to login</h6>
                                : <button className='waves-effect waves-light btn blue custom-button'> Add to cart</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CollectionItemCard;