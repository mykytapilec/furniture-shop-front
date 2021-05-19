import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uriForSearch } from './constants';
import './searchField.css';
import { fetchSearchItems } from './store/actions';

// console.log(Icon)


export const SearchBar: React.FC = () => {
    const [form, setForm] = useState({
        field: ''
    });
    const dispatch = useDispatch();

    const request = () => {
        dispatch(fetchSearchItems(uriForSearch, 'POST', form, {}))
        setForm({field: ''})
    }

    return (
        <>
            <form className="search-field">
                <div className="input-field">
                    <input 
                        id="search" 
                        type="search" 
                        value={form.field}
                        onChange={e => setForm({field: e.target.value})}
                        required 
                    />
                    <label className="label-icon"><i className="material-icons">s</i></label>
                    
                    <i className="material-icons">x</i>
                </div>
            </form>
            <button 
                className="waves-effect waves-light btn-small" 
                onClick={request}
            >find</button>
        </>
    )
};