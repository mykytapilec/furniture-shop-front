// import { useCallback, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import {useDispatch, useSelector} from 'react-redux';

// import { clearMessage, enter, logout } from '../authorization/store/actions';
// import { useMessage } from '../../hooks/message.hook';

// interface Props {
//     isAuthenticated: boolean
// }

import './footer.css';


const Footer = () => {

    // const message = useMessage();
    // const err = useSelector((state: Store) => state.loginReducer.message);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     if(err === 'logout') message(err);
    //   }, [
    //       err, 
    //       message, 
    //     ])
    
    // useEffect(() => {
    //     window.M.updateTextFields();
    // }, [])

    

    // const logoutHandler = useCallback(() => {
    //     try {
    //         dispatch(logout());
    //         localStorage.removeItem('userData');
    //         dispatch(enter(true));
    //     } catch(e){}
    // }, [dispatch])

    // const enterHandler = () => {
    //     dispatch(enter(false));
    //     dispatch(clearMessage())
    // }


    return (
        <footer className="page-footer blue darken-4">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    )
};


export default Footer;