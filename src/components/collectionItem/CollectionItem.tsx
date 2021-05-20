import {withRouter} from "react-router-dom";

import {CollectionItemProps} from "../../interfaces/interfaces";

import "./collectionItem.css";


const CollectionItem: React.FC<CollectionItemProps>= ({title, price, url, id, history}) =>{
    const path = history.location.pathname;

    return(
        <div className="collection_item">
            <div className="background_image">
            <img alt={title} src={url} onClick={()=> history.push(`${path}/${id}`)}/>
            </div>
            <div className="data_container">
                <h6>{title}</h6>
                <h6>{price}</h6>
            </div>
            <button className='waves-effect waves-light btn blue custom-button'> Add to cart</button>
        </div>
    )
}


export default withRouter(CollectionItem);