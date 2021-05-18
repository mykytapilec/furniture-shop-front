import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from "react-router-dom";
import {startFetchData} from '../store/action';
import {Loader} from '../../../components/loader/Loader';
import {CollectionProps} from "../../../interfaces/interfaces";


const CollectionPage: React.FC<CollectionProps> = ({history}): JSX.Element => {
    let title = history.location.pathname;
    title = title.substring(1);

    const data = useSelector((state: Store) => state.catalogReducer.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startFetchData(title));
    }, [dispatch, title]);

    return (
        <div>
            {
                title ? <h1>{title.toUpperCase()}</h1> : <h1>Not title</h1>
            }
            {
                data.length === 0 ? <Loader/> : data.map(element => <h1 key={element.id}> {element.title}</h1>)
            }
        </div>
    )
};


export default withRouter(CollectionPage);