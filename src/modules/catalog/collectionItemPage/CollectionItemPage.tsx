import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";

import {Loader} from "../../../components/loader/Loader";

import {fetchCollectionItem} from "./store/actions";
import {CollectionProps} from "../../../interfaces/interfaces";


const CollectionItemPage: React.FC<CollectionProps> = ({history}) => {
    const dispatch = useDispatch();
    const data = useSelector((state: Store) => state.catalogReducer.collectionItemReducer);

    useEffect(() => {
        dispatch(fetchCollectionItem(history.location.pathname))
    }, [dispatch, history.location.pathname]);

    return (
        <div>
            {
                data.isFetched ? <h1>{data.title}</h1> : <Loader/>
            }
        </div>
    )
}


export default withRouter(CollectionItemPage);