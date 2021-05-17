import {useDispatch, useSelector} from "react-redux";
import {startFetchData} from "./../catalog/store/catalog.actions";
export const CatalogPage: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: Store) => state.catalogReducer.items);
    const title = useSelector((state: Store) => state.catalogReducer.title)
    return (
        <div>
           <button onClick={() => dispatch(startFetchData("tables"))}>Tables</button>
            <button onClick={() => dispatch(startFetchData("beds"))}>Beds</button>
            <button onClick={() => dispatch(startFetchData("armchairs"))}>Armchairs</button>
            <button onClick={() => dispatch(startFetchData("sofas"))}>Sofas</button>
            {
                title ? <h1>{title}</h1> : <h1>Not title</h1>
            }
            {
                data.length == 0 ? <h1>Nothing</h1> : data.map(element => <h1 key={element.id}> {element.title}</h1>)
            }
        </div>
    )
}