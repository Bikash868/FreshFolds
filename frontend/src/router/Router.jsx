import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoute from '@components/PrivateRoute';

export function ApplicationRouter(props) {
    return (
        <BrowserRouter basename="/">
            <Switch>
                {props.routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={
                            <PrivateRoute
                                // redirectTo={'/login'}
                                // private={route.private}
                                private={false}
                                orRender={
                                    <route.layout {...props}>
                                        <route.component {...props} />
                                    </route.layout>
                                }
                            />
                        }
                    />
                ))}
            </Switch>
        </BrowserRouter>
    );
}

ApplicationRouter.propTypes = {
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            exact: PropTypes.bool,
            path: PropTypes.string,
            private: PropTypes.bool,
            layout: PropTypes.func,
            component: PropTypes.func,
        })
    ),
};
