import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCollection} from '../store/actions';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Loader} from '../../../components/loader/Loader';


interface RouterProps {
    path: string
};

interface CollectionProps extends RouteComponentProps<RouterProps> {
};

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
            {
                data.length === 0 ? <Loader/> : data.map(element => <h1 key={element.id}> {element.title}</h1>)
            }
        </div>
    )
};


export default withRouter(CollectionPage);