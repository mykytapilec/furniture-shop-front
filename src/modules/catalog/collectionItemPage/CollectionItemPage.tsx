import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";

import {Loader} from "../../../components/loader/Loader";
import CollectionItemCard from "../../../components/collectionItemCard/CollectionItemCard";

import {fetchCollectionItem} from "./store/actions";
import {CollectionProps} from "../../../interfaces/interfaces";

import "./collectionItemPage.css";


const CollectionItemPage: React.FC<CollectionProps> = ({history}) => {
    const dispatch = useDispatch();
    const data = useSelector((state: Store) => state.catalogReducer.collectionItemReducer);
    let arrayPath = history.location.pathname.split("/");
    const id = +arrayPath[arrayPath.length - 1];

    useEffect(() => {
        dispatch(fetchCollectionItem(history.location.pathname))
    }, [dispatch, history.location.pathname]);

    return (
        <div className="collection_page">
            {
                data.isFetched ?
                    <CollectionItemCard
                    id={id}
                    description={data.description}
                    price={data.price}
                    url={data.url}
                    title={data.title}
                />
                : <Loader/>
            }
        </div>
    )
};


export default withRouter(CollectionItemPage);