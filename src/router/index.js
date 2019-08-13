import { 
    BrowserRouter as Router, 
    Route 
} from 'react-router-dom';
import Layout from '@/pages/layout/layout';

import home from '@/pages/home/home';

const MyRouter = () => (
    <Layout>
        <Router>
            <div>
                <Route exact path="/" component={home}></Route>
            </div>
        </Router>
    </Layout>
);

export default MyRouter;