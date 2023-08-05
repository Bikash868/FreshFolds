import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
// import PrivateRoute from '@components/PrivateRoute';

export function ApplicationRouter(props) {
    return (
        <BrowserRouter basename="/">
            <Routes>
                {props.routes.map((route, index) => (
                    // <Route
                    //     key={index}
                    //     path={route.path}
                    //     exact={route.exact}
                    //     element={
                    //         <PrivateRoute
                    //             redirectTo={'/login'}
                    //             private={route.private}
                    //             orRender={
                    //                 <route.layout {...props}>
                    //                     <route.component {...props} />
                    //                 </route.layout>
                    //             }
                    //         />
                    //     }
                    // />
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        element={route.component}
                    />
                ))}
            </Routes>
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
