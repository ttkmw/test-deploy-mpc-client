import { Fragment } from 'react';

import Header from './components/Layout/Header';
import BodyContainer from './components/Layout/BodyContainer';
import Aside from './components/Layout/Aside';

const App = () => {
  return (
    <Fragment>
      <Header />
      <BodyContainer>
        <main>Main Content</main>
        <Aside></Aside>
      </BodyContainer>
    </Fragment>
  );
};

export default App;
