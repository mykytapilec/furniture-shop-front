import './searchField.css';


export const SearchBar: React.FC = () => {
    return (
        <form className="search-field">
            <div className="input-field">
                <input id="search" type="search" required />
                <label className="label-icon"><i className="material-icons">search</i></label>
                <i className="material-icons">x</i>
            </div>
        </form>
    )
};