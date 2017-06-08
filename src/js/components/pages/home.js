import Container from 'components/layouts/Container';
import FeaturedColumn from 'components/layouts/FeaturedColumn';
import Panel from 'components/layouts/Panel';
import PostGridContainer from 'containers/modules/postGridContainer';
import React from 'react';

const home = () => (
    <Container>
        <PostGridContainer/>
    </Container>
);

export default home;

        // <div className="col-large">
        //     <PostGridContainer/>
        // </div>
        // <div className="col-1-4">
        //     <FeaturedColumn/>
        // </div>