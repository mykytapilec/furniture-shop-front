import { useSelector } from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import { AuthPage } from './modules/authorization/AuthPage';
import { BasketPage } from './modules/basket/BasketPage';
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
            <Redirect to="/"/>
        </Switch>
    )
};