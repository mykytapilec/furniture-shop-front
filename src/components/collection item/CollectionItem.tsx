import {CatalogItem} from "../../interfaces/interfaces";

import "./collectionItem.css";


const CollectionItem = ({title, price, description, url }: CatalogItem) =>{
    return(
        <div className="collection_item">
            <div className="background_image">
            <img alt={title} src={url}/>
            </div>
            <h5>{title}</h5>
            <h6>{price}</h6>
            <h6>{description}</h6>
        </div>
    )
}


export default CollectionItem;