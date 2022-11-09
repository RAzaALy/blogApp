import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import storage from "./localStorage";
 


const PrivateRoute = ({ component: Component, ...rest }) => (
    
    <Route
        {...rest}
        render={props => {
            const user = storage.loadUser();
            if (user === null) {
                // not logged in so redirect to login page with the return url
                return (
                    <Redirect
                        to={"/login"}
                    />
                );
            }

            // authorised so return component
            return <Component {...props} />;
        }}
    />
);

export default PrivateRoute;
