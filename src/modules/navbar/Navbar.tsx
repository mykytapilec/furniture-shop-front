import { useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import { clearMessage, enter, logout } from '../authorization/store/actions';
import { useMessage } from '../../hooks/message.hook';


const Navbar: React.FC = () => {

    const message = useMessage();
    const err = useSelector((state: Store) => state.loginReducer.message);
    const isEnter = useSelector((state: Store) => state.loginReducer.isEnter);
    const dispatch = useDispatch();

    useEffect(() => {
        if(err === 'logout') message(err);
      }, [
          err, 
          message, 
        ])
    
    useEffect(() => {
        window.M.updateTextFields();
    }, [])

    

    const logoutHandler = useCallback(() => {
        try {
            dispatch(logout());
            localStorage.removeItem('userData');
            dispatch(enter(true));
        } catch(e){}
    }, [dispatch])

    const enterHandler = () => {
        dispatch(enter(false));
        dispatch(clearMessage());
    }

    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem'}}>
            <span className="brand-logo">furniture shop</span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                {<li><NavLink to="/main">main</NavLink></li>}
                {isEnter || <li><NavLink to="/basket">basket</NavLink></li>}
                {isEnter || <li><span onClick={logoutHandler}>exit</span></li>}
                {isEnter && <li><span onClick={enterHandler}>enter</span></li>}
            </ul>
            </div>
        </nav>
    )
};


export default Navbar;