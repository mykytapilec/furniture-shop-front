import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './searchField.css';


export const SearchBar: React.FC = () => {
    const [field, setField] = useState('');
    const dispatch = useDispatch();
    // const data = useSelector((state: Store) => state.catalogReducer.mainPageReducer);

    useEffect(() => {
        console.log(field)
    }, []);

    return (
        <form className="search-field">
            <div className="input-field">
                <input 
                    id="search" 
                    type="search" 
                    value={field}
                    onChange={e => setField(e.target.value)}
                    required 
                />
                <label className="label-icon"><i className="material-icons">s</i></label>
                <i className="material-icons">x</i>
            </div>
        </form>
    )
};