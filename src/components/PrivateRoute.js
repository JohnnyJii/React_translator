import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { getUser } from '../util/storage'

const PrivateRoute = ({ component: Component, ...rest }) => {
        return (
            <Route
              {...rest}
              render={(props) => {
                return getUser() == null ? (
                  <Redirect to="/" />
                ) : (
                  <Component {...props} />
                );
            }}
        />
      );
    };

export default PrivateRoute;
