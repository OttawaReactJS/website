import React, {Fragment} from 'react';
import { render } from 'react-dom';

// Global stylesheet
import './global.styled';

import Header from './components/header';

const Main = () => (
    <Fragment>
        <Header />
    </Fragment>
);

render(<Main />, document.getElementById('root'));
