import { Fragment } from 'react';

import Header from './components/Layout/Header';
import BodyContainer from './components/Layout/BodyContainer';

const App = () => {
  return (
    <Fragment>
      <Header />
      <BodyContainer></BodyContainer>
    </Fragment>
  );
};

export default App;
