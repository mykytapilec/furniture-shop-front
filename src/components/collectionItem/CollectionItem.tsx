import {withRouter} from "react-router-dom";
import {useSelector} from "react-redux";

import {CollectionItemProps} from "../../interfaces/interfaces";

import "./collectionItem.css";


const CollectionItem: React.FC<CollectionItemProps> = ({title, price, url, id, history}) => {
    const path = history.location.pathname;
    const isAuthenticated = useSelector((state: Store) => state.loginReducer.isEnter);

    return (
        <div className="collection_item">
            <div className="background_image">
                <img alt={title} src={url} onClick={() => history.push(`${path}/${id}`)}/>
            </div>
            <div className="data_container">
                <h6>{title}</h6>
                <h6>{price}</h6>
            </div>
            {
                isAuthenticated ? <h6>You need to login</h6>
                    : <button className='waves-effect waves-light btn blue custom-button'> Add to cart</button>
            }
        </div>
    )
};


export default withRouter(CollectionItem);