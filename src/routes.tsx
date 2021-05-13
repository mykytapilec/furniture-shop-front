import { useSelector } from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import { AuthPage } from './modules/authorization/AuthPage';
import { BasketPage } from './modules/basket/BasketPage';
import { ContactsPage } from './modules/contacts/ContactsPage';
import { HomePage } from './modules/home/HomePage';
import { MainPage } from './modules/main/MainPage';


interface LoginState {
    token: String;
    userId: String;
    isEnter: Boolean;
}

interface Store {
    loginReducer: LoginState;
}

export const useRoutes = (isAuthenticated: boolean) => {
    const isEnter = useSelector((state: Store) => state.loginReducer.isEnter);

    return (
        <Switch>
            <Route path="/home">
                <HomePage />
            </Route>
            <Route path="/contacts">
                <ContactsPage />
            </Route>
            <Route path="/main">
                <MainPage />
            </Route>
            {
                isAuthenticated && 
                    <Route path="/basket">
                        <BasketPage />
                    </Route>
            }
            {
                !isAuthenticated && !isEnter ? 
                    <Route path="/auth">
                        <AuthPage />
                    </Route> : null
            }
            <Redirect to="/home"/>
        </Switch>
    )
};