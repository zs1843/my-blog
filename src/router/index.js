import { 
    BrowserRouter as Router, 
    Route 
} from 'react-router-dom';
import Layout from '@/pages/layout/layout';

import home from '@/pages/home/home';

const MyRouter = () => (
    
        <Router>
            <Layout>
                <div>
                    <Route exact path="/" component={home}></Route>
                </div>
            </Layout>
        </Router>
);

export default MyRouter;