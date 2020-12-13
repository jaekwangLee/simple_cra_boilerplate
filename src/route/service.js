import { Route } from 'react-router';

// page
import ServicePage from '@/pages/service';
import ServiceUsePage from '@/pages/service/section/use';
import ServiceIntrodcuePage from '@/pages/service/section/introduce';

const ServiceRouter = () => (
    <Route path='/service'>
        <Route exact path='/service/use' component={ServiceUsePage} />
        <Route exact path='/service/introduce' component={ServiceIntrodcuePage} />
        <Route exact path='/service' component={ServicePage} />
    </Route>
);

export default ServiceRouter;
