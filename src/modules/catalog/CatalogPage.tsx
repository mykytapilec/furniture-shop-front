import { useDispatch } from "react-redux";
import { apiCatalog } from "./constants";
import { fetchCatalog } from "./store/actions";

export const CatalogPage: React.FC = () => {
    const dispatch = useDispatch();

    const catalog = () => {
        try {
            console.log(1)
            dispatch(fetchCatalog(apiCatalog, 'GET'));
        } catch(e){}
    }

    return (
        <div>
            <button
                onClick={catalog}
            >catalog</button>
        </div>
    )
};