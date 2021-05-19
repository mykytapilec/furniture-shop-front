import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCollection} from '../store/actions';
import {withRouter} from 'react-router-dom';

import {Loader} from '../../../components/loader/Loader';
import {CollectionProps} from "../../../interfaces/interfaces";
import CollectionItem from "../../../components/collection item/CollectionItem";

import "./collectionPage.css";


const CollectionPage: React.FC<CollectionProps> = ({history}): JSX.Element => {
    let title = history.location.pathname;
    title = title.substring(1);

    const data = useSelector((state: Store) => state.catalogReducer.collectionReducer.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCollection(title));
    }, [dispatch, title]);

    return (
        <div>
            {
                title ? <h1>{title.toUpperCase()}</h1> : <h1>Not title</h1>
            }
            <div className="collection_container">
            {
                data.length === 0 ? <Loader/> : data.map(element =>
                    <CollectionItem
                    title={element.title}
                    id={element.id}
                    url={element.url}
                    price={element.price}
                    description={element.description}
                    key={element.id}
                    />
                )
            }
            </div>
        </div>
    )
};


export default withRouter(CollectionPage);