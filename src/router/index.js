import { 
    BrowserRouter as Router, 
    Route 
} from 'react-router-dom';

import home from '@/pages/home';

const MyRouter = () => (
    <Router>
        <div>
            <Route exact path="/" component={home}></Route>
        </div>
    </Router>
);

export default MyRouter;