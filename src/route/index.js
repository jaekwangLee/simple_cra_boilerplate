import React from 'react';
import { Route, Switch } from 'react-router';

import Main from '@/pages/main';
import Service from '@/route/service';

const AppRoute = () => (
    <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/service' render={Service} />
    </Switch>
);

export default AppRoute;
