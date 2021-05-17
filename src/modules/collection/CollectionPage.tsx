import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {startFetchData} from "../catalog/store/catalog.actions";
import {RouteComponentProps, withRouter} from "react-router-dom";
interface RouterProps{
    path: string
}
interface CollectionProps extends RouteComponentProps<RouterProps> {
}
const CollectionPage: React.FC<CollectionProps> = ({history}) : JSX.Element =>{
    let title = history.location.pathname;
    title = title.substring(1);

    const data = useSelector((state:Store ) => state.catalogReducer.items);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(startFetchData(title))
    },[]);
    return (
        <div>
            {
                title ? <h1>{title}</h1> : <h1>Not title</h1>
            }
            {
                data.length == 0 ? <h1>Nothing</h1> : data.map(element => <h1 key={element.id}> {element.title}</h1>)
            }
    </div>
)
}
export default withRouter(CollectionPage);