import React from 'react';
import { Provider } from 'react-redux';
import store from './redux-demo/redux/Store.js';
import GitTask from './redux-demo/GitTask.js';
import UserDetails from './redux-demo/UserDetails.js';
import UserRepoDetails from './redux-demo/UserRepoDetails.js';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <>
            <Provider store={store}>
                <Switch>
                    <Route exact path={'/'} component={ GitTask } />
                    <Route exact path={'/users/:username'} component={ UserDetails } />
                    <Route exact path={'/users/:username/:repos'} component={ UserRepoDetails } />
                </Switch>
            </Provider>
        </>
    );
}

export default App;