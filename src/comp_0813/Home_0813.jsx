import React from 'react';

import Comp_effect from './comp.effect/Comp_effect';
import Comp_memo from './comp_memo/Comp_memo';

const Home_0813 = () => {
    return (
        <div>
            <Router>
                <Routes>

                    <Route path="/" element={<Layout />}>
                       
                        
                        <Route path="Comp_memo" element={<Comp_memo />} />
                        <Route path="Comp_effect" element={<Comp_effect />} />
                    </Route>
                </Routes>
            </Router>
    
        </div>
    );
};

export default Home_0813;